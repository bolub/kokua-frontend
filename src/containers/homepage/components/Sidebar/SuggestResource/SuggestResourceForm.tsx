import { Button, Center, Text, chakra } from "@chakra-ui/react";
import { useFormState } from "react-dom";
import { suggestResourceAction } from "./SuggestResourceAction";
import { useState } from "react";
import { PersonalDetailsSection } from "./PersonalDetailsSection";
import { ResourceDetailsSection } from "./ResourceDetailsSection";

const initialState = {
  message: "",
};

export const SuggestResourceForm = ({ onFinish }: { onFinish: () => void }) => {
  const [state, formAction] = useFormState(suggestResourceAction, initialState);

  const [stage1Visible, setStage1Visible] = useState(true);
  const [stage2Visible, setStage2Visible] = useState(false);

  const moveToNextStage = () => {
    setStage1Visible(false);
    setStage2Visible(true);
  };

  const moveToPrevStage = () => {
    setStage2Visible(false);
    setStage1Visible(true);
  };

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
          <PersonalDetailsSection
            isVisible={stage1Visible}
            moveToNextStage={moveToNextStage}
          />

          <ResourceDetailsSection
            isVisible={stage2Visible}
            moveToPrevStage={moveToPrevStage}
          />
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
