export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      food: {
        date: string;
        name: string;
      };
      feedback: {
        isOnTheDiet: string;
      };
      statistics: {
        percentage: string;
      };
      formFood:
        | {
            date: string;
            name: string;
          }
        | undefined;
    }
  }
}
