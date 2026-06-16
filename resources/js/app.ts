import { createInertiaApp } from '@inertiajs/vue3';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createSSRApp, h, type DefineComponent } from 'vue';
import Vue3Toastify, { toast } from 'vue3-toastify'
import { initializeTheme } from '@/composables/useAppearance';
import AppLayout from '@/layouts/AppLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { initializeFlashToast } from '@/lib/flashToast';
import 'vue3-toastify/dist/index.css'

ModuleRegistry.registerModules([AllCommunityModule]);

const appName =
    import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) =>
        title
            ? `${title} - ${appName}`
            : appName,

    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Vue3Toastify, {
                theme: 'colored',
                autoClose: 3000,
                position: toast.POSITION.TOP_RIGHT,
                toastStyle: {
                    color: '#fff',
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#fff'
                }
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },

    layout: (name) => {
        switch (true) {
            case name === 'Welcome':
                return null;

            case name.startsWith('auth/'):
                return AuthLayout;

            case name.startsWith('settings/'):
                return [
                    AppLayout,
                    SettingsLayout,
                ];

            default:
                return AppLayout;
        }
    },
});

initializeTheme();

initializeFlashToast();