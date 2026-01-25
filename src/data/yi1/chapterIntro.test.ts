import { describe, it, expect } from "vitest";
import { chapter1Nodes } from "@/data/yi1/chapter1Nodes";
import { chapter2Nodes } from "@/data/yi1/chapter2Nodes";
import { chapter3Nodes } from "@/data/yi1/chapter3Nodes";
import { chapter4Nodes } from "@/data/yi1/chapter4Nodes";
import { chapter5Nodes } from "@/data/yi1/chapter5Nodes";
import { chapter6Nodes } from "@/data/yi1/chapter6Nodes";
import { chapter7Nodes } from "@/data/yi1/chapter7Nodes";
import { chapter8Nodes } from "@/data/yi1/chapter8Nodes";
import { chapter9Nodes } from "@/data/yi1/chapter9Nodes";
import { chapter10Nodes } from "@/data/yi1/chapter10Nodes";
import { chapter11Nodes } from "@/data/yi1/chapter11Nodes";
import { chapter12Nodes } from "@/data/yi1/chapter12Nodes";
import { chapter13Nodes } from "@/data/yi1/chapter13Nodes";
import { chapter14Nodes } from "@/data/yi1/chapter14Nodes";
import { chapter15Nodes } from "@/data/yi1/chapter15Nodes";
import { chapter16Nodes } from "@/data/yi1/chapter16Nodes";
import { epilogueNodes } from "@/data/yi1/epilogueNodes";

describe("chapter intro nodes", () => {
  const introNodes = [
    { id: "yi1-ch1-intro", nodes: chapter1Nodes },
    { id: "yi1-ch2-intro", nodes: chapter2Nodes },
    { id: "yi1-ch3-intro", nodes: chapter3Nodes },
    { id: "yi1-ch4-intro", nodes: chapter4Nodes },
    { id: "yi1-ch5-intro", nodes: chapter5Nodes },
    { id: "yi1-ch6-intro", nodes: chapter6Nodes },
    { id: "yi1-ch7-intro", nodes: chapter7Nodes },
    { id: "yi1-ch8-intro", nodes: chapter8Nodes },
    { id: "yi1-ch9-intro", nodes: chapter9Nodes },
    { id: "yi1-ch10-intro", nodes: chapter10Nodes },
    { id: "yi1-ch11-intro", nodes: chapter11Nodes },
    { id: "yi1-ch12-intro", nodes: chapter12Nodes },
    { id: "yi1-ch13-intro", nodes: chapter13Nodes },
    { id: "yi1-ch14-intro", nodes: chapter14Nodes },
    { id: "yi1-ch15-intro", nodes: chapter15Nodes },
    { id: "yi1-ch16-intro", nodes: chapter16Nodes },
    { id: "yi1-epilogue-intro", nodes: epilogueNodes },
  ];

  it.each(introNodes)("starts with $id", ({ id, nodes }) => {
    expect(nodes[0]?.id).toBe(id);
  });

  it("links chapter one intro to the first scene", () => {
    expect(chapter1Nodes[0]?.nextNodeId).toBe("yi1-ch1-1");
  });

  it("normalizes intro node ids for chapter detection", async () => {
    const { getSceneImage } = await import("@/data/yi1/sceneImages");
    expect(getSceneImage("yi1-ch1-intro")).not.toBeNull();
  });
});
