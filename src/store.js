import React from "react";

const votes = [
  {
    candidate: "john Doe",
    votantNickname: "Walter White", // 6-8 alfanumerric
    commentary:
      "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    valoration: "positive",
  },
];

const surveyContext = React.createContext();

export { surveyContext, votes };
