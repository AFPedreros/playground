import { UseTRPCMutationResult } from '@trpc/react-query/shared';
import { toast } from 'sonner';

type UseFormMutationProps<T, TError, TVariables> = {
  mutation: UseTRPCMutationResult<T, TError, TVariables, unknown>;
  onSuccessMessage: string;
  onErrorMessage: string;
  toggleEditing: () => void;
};

export function useFormMutation<T, TError, TVariables = T>({mutation, onErrorMessage, onSuccessMessage, toggleEditing}: UseFormMutationProps<T, TError, TVariables>
) {
  const isLoading = mutation.isLoading;

  const handleMutation = async (values: TVariables) => {
    
    try {
      await mutation.mutateAsync(values);
      toast.success(onSuccessMessage);
      toggleEditing();
    } catch (error) {
      console.log('Error', error);
      toast.error(onErrorMessage);
    } finally {
      
    }
  };

  return { isLoading, handleMutation };
}
