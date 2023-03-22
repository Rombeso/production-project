import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// Кнопка для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    const { t } = useTranslation();
    const toggleError = () => setError(true);

    return (
        <Button onClick={toggleError}>
            {t('throw error')}
        </Button>
    );
};
