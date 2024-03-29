import { blockListControllerAddItemToBlockList, blockListControllerGetList, blockListControllerRemoveItemFromBlockList } from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const blockListKey = ['block-list'] as unknown[]

export function useBlockListQuery({q}: {q: string}) {

  return useQuery({
    queryKey: blockListKey.concat({ q }),
    queryFn: () => blockListControllerGetList({q}),
  })
}

export function useAddBlockItemMutation() {
  const queryClient = useQueryClient()
  
  return useMutation({
    // mutationKey: blockListKey,
    mutationFn: blockListControllerAddItemToBlockList,
    async onSettled() {
      await queryClient.invalidateQueries({queryKey: blockListKey})
    }
  })
}

export function useRemoveBlockItemMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    // mutationKey: blockListKey,
    mutationFn: blockListControllerRemoveItemFromBlockList,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: blockListKey })
    }

  })
}