import { useQuery } from "@tanstack/react-query";
import { getCurrrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isPending, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrrentUser,
  });

  return { isPending, user, isAuthenticated: user?.role === "authenticated" };
}
