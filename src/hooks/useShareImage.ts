import { useCallback, useState } from 'react';
import html2canvas from 'html2canvas';
import { toast } from '@/hooks/use-toast';

interface ShareImageOptions {
  filename?: string;
  backgroundColor?: string;
}

export const useShareImage = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateImage = useCallback(async (
    element: HTMLElement | null,
    options: ShareImageOptions = {}
  ): Promise<string | null> => {
    if (!element) {
      toast({
        title: '生成失敗',
        description: '找不到要截圖的元素',
        variant: 'destructive',
      });
      return null;
    }

    setIsGenerating(true);

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: options.backgroundColor || '#0a0a0f',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      const dataUrl = canvas.toDataURL('image/png');
      setIsGenerating(false);
      return dataUrl;
    } catch (error) {
      console.error('Failed to generate image:', error);
      toast({
        title: '生成失敗',
        description: '無法生成分享圖片，請稍後再試',
        variant: 'destructive',
      });
      setIsGenerating(false);
      return null;
    }
  }, []);

  const downloadImage = useCallback(async (
    element: HTMLElement | null,
    options: ShareImageOptions = {}
  ) => {
    const dataUrl = await generateImage(element, options);
    if (!dataUrl) return;

    const link = document.createElement('a');
    link.download = options.filename || 'arc-zero-ending.png';
    link.href = dataUrl;
    link.click();

    toast({
      title: '下載成功',
      description: '結局圖片已儲存',
    });
  }, [generateImage]);

  const shareToTwitter = useCallback((text: string, url?: string) => {
    const tweetText = encodeURIComponent(text);
    const tweetUrl = url ? `&url=${encodeURIComponent(url)}` : '';
    window.open(
      `https://twitter.com/intent/tweet?text=${tweetText}${tweetUrl}`,
      '_blank',
      'width=600,height=400'
    );
  }, []);

  const shareToFacebook = useCallback((url?: string) => {
    const shareUrl = url || window.location.href;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  }, []);

  const shareToLine = useCallback((text: string, url?: string) => {
    const message = url ? `${text} ${url}` : text;
    window.open(
      `https://social-plugins.line.me/lineit/share?text=${encodeURIComponent(message)}`,
      '_blank',
      'width=600,height=400'
    );
  }, []);

  const copyToClipboard = useCallback(async (
    element: HTMLElement | null,
    options: ShareImageOptions = {}
  ) => {
    const dataUrl = await generateImage(element, options);
    if (!dataUrl) return;

    try {
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);

      toast({
        title: '複製成功',
        description: '圖片已複製到剪貼簿',
      });
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      toast({
        title: '複製失敗',
        description: '無法複製圖片，請嘗試下載',
        variant: 'destructive',
      });
    }
  }, [generateImage]);

  const nativeShare = useCallback(async (
    element: HTMLElement | null,
    shareData: { title?: string; text?: string; url?: string },
    options: ShareImageOptions = {}
  ) => {
    if (!navigator.share) {
      toast({
        title: '不支援分享',
        description: '您的瀏覽器不支援原生分享功能',
        variant: 'destructive',
      });
      return;
    }

    const dataUrl = await generateImage(element, options);
    
    try {
      if (dataUrl && navigator.canShare) {
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const file = new File([blob], 'arc-zero-ending.png', { type: 'image/png' });

        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            ...shareData,
            files: [file],
          });
          return;
        }
      }

      await navigator.share(shareData);
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.error('Share failed:', error);
        toast({
          title: '分享失敗',
          description: '無法完成分享操作',
          variant: 'destructive',
        });
      }
    }
  }, [generateImage]);

  return {
    isGenerating,
    generateImage,
    downloadImage,
    shareToTwitter,
    shareToFacebook,
    shareToLine,
    copyToClipboard,
    nativeShare,
  };
};
