import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: genericListProps) {
  if (!props.list) {
    if (props.loadingUI) {
      return props.loadingUI;
    }
    return <Loading />;
  } else if (props.list.length === 0) {
    if (props.emptyListUi) {
      return props.emptyListUi;
    }
    return <>Ei ole elementtejä näytettäväksi!</>;
  } else {
    return props.children;
  }
}

interface genericListProps {
  list: any;
  loadingUI?: ReactElement;
  emptyListUi?: ReactElement;
  children: ReactElement;
}
