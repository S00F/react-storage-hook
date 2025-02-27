import { renderHook, act } from "@testing-library/react";
import useStorage from "./useStorage";

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

test("should use local storage by default", () => {
  const { result } = renderHook(() => useStorage("testKey", "defaultValue"));
  expect(result.current[0]).toBe("defaultValue");
});

test("should update local storage value", () => {
  const { result } = renderHook(() => useStorage("testKey", "defaultValue"));
  act(() => {
    result.current[1]("newValue");
  });
  expect(localStorage.getItem("testKey")).toBe(JSON.stringify("newValue"));
});

test("should use session storage when specified", () => {
  const { result } = renderHook(() => useStorage("sessionKey", "sessionValue", "session"));
  expect(result.current[0]).toBe("sessionValue");
});