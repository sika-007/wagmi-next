"use client";

import { UseEnsNameReturnType, useAccount, useEnsName } from "wagmi";
import { config } from "@/wagmi/config";

const Profile = () => {
  const { address } = useAccount({ config });
  console.log(address);
  const { data, error, status }: UseEnsNameReturnType = useEnsName({ address });
  if (status === "pending") return <div>Loading ENS name</div>;
  if (status === "error")
    return <div>Error fetching ENS name: {error.message}</div>;
  return <div>ENS name: {data}</div>;
};

export default Profile;
