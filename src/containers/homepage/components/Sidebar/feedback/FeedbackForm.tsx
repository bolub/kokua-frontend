import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  chakra,
} from "@chakra-ui/react";
import { useFormState, useFormStatus } from "react-dom";
import { feedbackAction } from "./FeedbackAction";

const initialState = {
  message: "",
  status: "pending",
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      ml="auto"
      rounded="xl"
      fontSize="sm"
      mt="24px"
      type="submit"
      colorScheme="brand"
      isLoading={pending}
    >
      Send Feedback
    </Button>
  );
};

export const FeedbackForm = ({ onFinish }: { onFinish: () => void }) => {
  const [state, formAction] = useFormState(feedbackAction, initialState);

  const hasError = state.status === "error";

  return (
    <chakra.form
      action={formAction}
      mt="32px"
      display="flex"
      position="relative"
      flexDir="column"
    >
      {state.status !== "success" && (
        <>
          <FormControl isRequired>
            <FormLabel fontSize="sm" mb="1">
              Message
            </FormLabel>

            <Textarea
              name="message"
              variant="filled"
              placeholder="Holla us here..."
              fontSize="sm"
              rounded="xl"
            ></Textarea>
          </FormControl>

          <SubmitButton />
        </>
      )}

      {state.message && hasError && (
        <Center
          mt="18px"
          textAlign="center"
          rounded="xl"
          py="40px"
          px="20px"
          bgColor="red.500"
          flexDir="column"
        >
          <Text fontSize="sm" color="white" maxW="280px">
            Something happened, please try again
          </Text>
        </Center>
      )}

      {state.message && !hasError && (
        <Center
          textAlign="center"
          rounded="xl"
          py="40px"
          px="20px"
          bgColor="brand.500"
          flexDir="column"
        >
          <Text fontSize="sm" color="white" maxW="280px">
            {state.message}
          </Text>

          <Button onClick={onFinish} size="xs" mt="6">
            Close
          </Button>
        </Center>
      )}
    </chakra.form>
  );
};
