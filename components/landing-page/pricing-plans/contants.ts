const plans = [
  {
    key: "base",
    isPro: false,
    features: [
      {
        key: "activeGroups",
        included: true,
      },
      {
        key: "basicChat",
        included: true,
      },
      {
        key: "cooldown",
        included: true,
      },
      {
        key: "visibility",
        included: true,
      },
      {
        key: "privateGroups",
        included: false,
      },
      {
        key: "aiItineraries",
        included: false,
      },
    ],
  },
  {
    key: "pro",
    isPro: true,
    features: [
      {
        key: "activeGroups",
        included: true,
      },
      {
        key: "privateGroups",
        included: true,
      },
      {
        key: "advancedChat",
        included: true,
      },
      {
        key: "visibility",
        included: true,
      },
      {
        key: "cooldown",
        included: true,
      },
      {
        key: "aiItineraries",
        included: false,
      },
    ],
  },
  {
    key: "max",
    isPro: false,
    features: [
      {
        key: "activeGroups",
        included: true,
      },
      {
        key: "privateGroups",
        included: true,
      },
      {
        key: "advancedChat",
        included: true,
      },
      {
        key: "visibility",
        included: true,
      },
      {
        key: "cooldown",
        included: true,
      },
      {
        key: "aiItineraries",
        included: true,
      },
    ],
  },
];

export { plans };
