import { useRef } from "react";

function useSectionRefs<T extends string>(
  ids: T[]
): Record<T, React.RefObject<HTMLDivElement>> {
  const refs = useRef<Record<T, React.RefObject<HTMLDivElement>>>(
    {} as Record<T, React.RefObject<HTMLDivElement>>
  );

  // Populate refs only once
  ids.forEach((id) => {
    if (!refs.current[id]) {
      // Important: The ref is actually RefObject<HTMLDivElement | null>
      // So we cast it appropriately
      refs.current[id] = useRef<HTMLDivElement>(null);
    }
  });

  return refs.current;
}
export default useSectionRefs;
