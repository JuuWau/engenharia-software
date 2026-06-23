import type { ComputedRef, Ref } from 'vue';
import { computed, onMounted, ref } from 'vue';

export type UseAppearanceReturn = {
    appearance: Ref<'light'>;
    resolvedAppearance: ComputedRef<'light'>;
    updateAppearance: (value: 'light') => void;
};

export function updateTheme(): void {
    if (typeof window === 'undefined') {
        return;
    }
    
    document.documentElement.classList.remove('dark');
}

export function initializeTheme(): void {
    if (typeof window === 'undefined') {
        return;
    }
    
    updateTheme();
}

const appearance = ref<'light'>('light');

export function useAppearance(): UseAppearanceReturn {
    onMounted(() => {
        appearance.value = 'light';
        updateTheme();
    });

    const resolvedAppearance = computed<'light'>(() => {
        return 'light';
    });

    function updateAppearance(value: 'light') {
        appearance.value = 'light';
        localStorage.setItem('appearance', 'light');
        setCookie('appearance', 'light');
        updateTheme();
    }

    return {
        appearance,
        resolvedAppearance,
        updateAppearance,
    };
}

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};