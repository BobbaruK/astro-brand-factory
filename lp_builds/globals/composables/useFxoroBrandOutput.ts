const useFxoroBrandOutput = (name: string) => {
  if (name.toLowerCase() === "fxoro") return "<span class='fxoroBrand'>FX<span>ORO</span></span>";

  return name;
};

export default useFxoroBrandOutput;
