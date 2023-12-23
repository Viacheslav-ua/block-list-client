import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignInForm } from "../model/use-sign-in-form";

export function SignInForm() {

  const {register, handleSubmit, isPending, errorMessage} = useSignInForm()

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>

      <UiTextField inputProps={{type: "email", ...register("email", {required: true})}} label="email" />
      <UiTextField inputProps={{type: "password", ...register("password", {required: true})}} className="mb-2" label="password" />
      
      <UiButton disabled={isPending} variant="primary">Sign In</UiButton>
      <UiLink href={ROUTES.SIGN_UP} className="font-bold">Sign Up</UiLink>

      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  )
}