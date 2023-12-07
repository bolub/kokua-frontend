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
      Submit Resource
    </Button>
  );
};

export const FeedbackForm = ({ onFinish }: { onFinish: () => void }) => {
  const [state, formAction] = useFormState(feedbackAction, initialState);

  return (
    <chakra.form
      action={formAction}
      mt="32px"
      display="flex"
      position="relative"
      flexDir="column"
    >
      {!state.message ? (
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
      ) : (
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
