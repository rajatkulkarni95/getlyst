import { useStore } from "../store";

export const sliderText = (value) => {
  if (value <= 10) {
    useStore.setState({
      rangeText: "Are you even trying?",
    });
  } else if (value <= 20) {
    useStore.setState({
      rangeText: "Come on, live a little",
    });
  } else if (value <= 30) {
    useStore.setState({
      rangeText: "Sweet!",
    });
  } else if (value <= 40) {
    useStore.setState({
      rangeText: "Its Groove Time",
    });
  } else if (value <= 50) {
    useStore.setState({
      rangeText: "Made my Day!",
    });
  } else if (value <= 60) {
    useStore.setState({
      rangeText: "Thinking Ahead",
    });
  } else if (value <= 70) {
    useStore.setState({
      rangeText: "Maybe? Maybe!",
    });
  } else if (value <= 80) {
    useStore.setState({
      rangeText: "Leeeeeeeets Gooooo!",
    });
  } else if (value <= 90) {
    useStore.setState({
      rangeText: "MOOOOOOOOOARRRR!!",
    });
  } else if (value < 100) {
    useStore.setState({
      rangeText: "This is the Way",
    });
  } else {
    useStore.setState({
      rangeText: "Enlightenment",
    });
  }
};
