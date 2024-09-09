import { type ComponentProps } from "../../types/ComponentProps";

const useCheckDesignVersion = (componentProps: ComponentProps) => {
  if (!componentProps.designVersion) throw new Error("You have to add designVersion key in componentProps");
};

export default useCheckDesignVersion;
