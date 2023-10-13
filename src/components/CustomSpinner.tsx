import { Modal, ModalOverlay, Spinner } from '@chakra-ui/react';

const widthInPx = 100;

const CustomSpinner = () => {
	return (
		<Modal isOpen onClose={() => {}}>
			<ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px">
				<Spinner
					w={`${widthInPx}px`}
					h={`${widthInPx}px`}
					color="black"
					pos="absolute"
					left={`calc(50vw - ${widthInPx / 2}px)`}
					bottom="50vh"
				/>
			</ModalOverlay>
		</Modal>
	);
};

export default CustomSpinner;
