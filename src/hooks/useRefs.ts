import React, { useRef } from "react";

function useSectionRefs<T extends string>(
  ids: T[]
): Record<T, React.RefObject<HTMLDivElement | null>> {
  const refs = useRef<Record<T, React.RefObject<HTMLDivElement | null>>>(
    {} as Record<T, React.RefObject<HTMLDivElement | null>>
  );

  ids.forEach((id) => {
    if (!refs.current[id]) {
      refs.current[id] = React.createRef<HTMLDivElement>();
    }
  });

  return refs.current;
}

export default useSectionRefs;
