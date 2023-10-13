import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';

interface CustomModalProps {
	charactersCount: number;
	setOnOpen: (onOpen: () => void) => void;
}

const CustomModal = ({ charactersCount, setOnOpen }: CustomModalProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		setOnOpen(() => onOpen);
	}, [onOpen, setOnOpen]);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton />
				<ModalBody>We found {charactersCount} characters from you</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CustomModal;
