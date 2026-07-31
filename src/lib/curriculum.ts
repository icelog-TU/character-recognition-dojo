import type { Lesson } from "../types";

export function buildZhuyinMap(lessons: Lesson[], upToOrder: number): Map<string, string> {
  const map = new Map<string, string>();
  for (const lesson of lessons) {
    if (lesson.order > upToOrder) continue;
    for (const char of lesson.newChars) {
      map.set(char, lesson.zhuyin[char] ?? "");
    }
  }
  return map;
}

export function nextLockedLessonOrder(lessons: Lesson[], completedOrders: Set<number>): number {
  const sorted = [...lessons].sort((a, b) => a.order - b.order);
  return sorted.find((lesson) => !completedOrders.has(lesson.order))?.order ?? sorted[sorted.length - 1]?.order ?? 1;
}

export function hanChars(text: string): string[] {
  return Array.from(text).filter((char) => /\p{Script=Han}/u.test(char));
}
