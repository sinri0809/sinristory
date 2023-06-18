import React from "react";

import { useRecoilValue } from "recoil";
import { skillExplainState } from "store/dashboard.store";

const DashboardExplain = () => {
  const skillExplain = useRecoilValue(skillExplainState);

  return <p className="dashboard-explain">
    {skillExplain}
  </p>
}

export default DashboardExplain;