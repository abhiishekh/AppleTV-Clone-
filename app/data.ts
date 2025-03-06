
interface Data {
  h2: string;
  h1: string;
  p: string;
  button: string;
  link?:string;
}


export const data: Data[] = [
    {
      h2: "Buy an Apple device",
      h1: "3 months free.",
      p: "Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.",
      button: "Check eligibility",
      link:''
    },
    {
      h2: "Free 7-day trial",
      h1: "$9.99/mo.",
      p: "A monthly subscription is just $9.99 per month after a free 7-day trial.3 Share Apple TV+ with your family.",
      button: "Try it free",
      link:''
    },
    {
      h2: "Free 1‑month trial",
      h1: "Apple One",
      p: "Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less.",
      button: "Try Apple One free.",
      link:"Learn more >"
    },
  ];