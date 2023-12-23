import { UiButton } from "@/shared/ui/ui-button";
import { useSignOut } from "../model/use-sign-out";

export function SignOutButton() {

  const {signOut, isPending} = useSignOut()
  
  return <UiButton  variant="outlined" disabled={isPending} onClick={() => signOut({})}>Sign Out</UiButton>
}