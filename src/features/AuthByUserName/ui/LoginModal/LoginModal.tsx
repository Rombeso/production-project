import { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        // className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);
