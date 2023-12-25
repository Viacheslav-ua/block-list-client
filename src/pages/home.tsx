import {Inter} from "next/font/google";
import {UiButton} from "@/shared/ui/ui-button";
import {UiTextField} from "@/shared/ui/ui-text-field";
import {UiSelectField} from "@/shared/ui/ui-select-field";
import {UiLink} from "@/shared/ui/ui-link";
import {UiSpinner} from "@/shared/ui/ui-spinner";
import {UiHeader} from "@/shared/ui/ui-header";
import {ToggleBlockingButton} from "@/features/toggle-blocking/ui/toggle-blocking-button";
import {Profile} from "@/widgets/profile";
import { useBlockListQuery } from "@/entities/block-list";
import { AddBlockItemForm, BlockList } from "@/features/block-list";

const inter = Inter({subsets: ["latin"]});

export default function HomePage() {
  
  return (<div className="flex min-h-screen flex-col">
    <UiHeader className="" right={<Profile />}/>

    <div className="grid grid-cols-[200px_1fr]">
      
      <aside className="px-5 pt-10">
        <ToggleBlockingButton/>
      </aside>

      <main>
        <h1 className="text-2xl px-5 pt-10 mb-8">Block List</h1>
        <AddBlockItemForm />
        <BlockList className="mt-3" />
      </main>

    </div>
  </div>);
}
