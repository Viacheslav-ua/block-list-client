import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignUpForm } from "../model/use-sign-up-form";

export function SignUpForm() {

  const {register, handleSubmit, isPending, errorMessage} = useSignUpForm()

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>

      <UiTextField inputProps={{type: "email", ...register("email", {required: true})}} label="email" />
      <UiTextField inputProps={{type: "password", ...register("password", {required: true})}} className="mb-2" label="password" />
      
      <UiButton disabled={isPending} variant="primary">Sign Up</UiButton>
      <UiLink href={ROUTES.SIGN_IN} className="font-bold">Sign In</UiLink>

      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  )
}