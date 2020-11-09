import { useRecommendedStore } from "../store";

export const sliderText = (value) => {
  if (value <= 10) {
    useRecommendedStore.setState({
      rangeText: "Are you even trying?",
    });
  } else if (value <= 20) {
    useRecommendedStore.setState({
      rangeText: "Come on, live a little",
    });
  } else if (value <= 30) {
    useRecommendedStore.setState({
      rangeText: "Sweet!",
    });
  } else if (value <= 40) {
    useRecommendedStore.setState({
      rangeText: "Its Groove Time",
    });
  } else if (value <= 50) {
    useRecommendedStore.setState({
      rangeText: "Made my Day!",
    });
  } else if (value <= 60) {
    useRecommendedStore.setState({
      rangeText: "Thinking Ahead",
    });
  } else if (value <= 70) {
    useRecommendedStore.setState({
      rangeText: "Maybe? Maybe!",
    });
  } else if (value <= 80) {
    useRecommendedStore.setState({
      rangeText: "Leeeeeeeets Gooooo!",
    });
  } else if (value <= 90) {
    useRecommendedStore.setState({
      rangeText: "MOOOOOOOOOARRRR!!",
    });
  } else if (value < 100) {
    useRecommendedStore.setState({
      rangeText: "This is the Way",
    });
  } else {
    useRecommendedStore.setState({
      rangeText: "Enlightenment",
    });
  }
};
