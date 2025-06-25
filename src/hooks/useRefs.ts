import { useMemo, useRef } from "react";

function useSectionRefs<T extends string>(
  ids: T[]
): Record<T, React.RefObject<HTMLDivElement | null>> {
  const refs = useMemo(() => {
    const obj = {} as Record<T, React.RefObject<HTMLDivElement | null>>;
    ids.forEach((id) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      obj[id] = useRef<HTMLDivElement>(null);
    });
    return obj;
  }, [ids]);

  return refs;
}
export default useSectionRefs;
