import create from 'zustand'
import { persist } from 'zustand/middleware'

const themes = ['light', 'dark'] as const
type Theme = typeof themes[number]

interface ThemeStore {
	theme: Theme
	toggleTheme: () => void
	setTheme: (theme: Theme) => void
}

const addToDoc = (theme: Theme) => {
	if (!window) return
	const root = document.documentElement
	themes.forEach((oldTheme) => root.classList.remove(oldTheme))
	root.classList.add(theme)
}

const getToggledTheme = (oldTheme: Theme): Theme =>
	oldTheme === 'dark' ? 'light' : 'dark'

const themeStore = create<ThemeStore>(
	persist(
		(set, get) => ({
			theme: 'light',
			toggleTheme: () => set({ theme: getToggledTheme(get().theme) }),
			setTheme: (theme: Theme) => set({ theme }),
		}),
		{
			name: 'theme',
			onRehydrateStorage: () => {
				return (state) => !!state && addToDoc(state.theme)
			},
		}
	)
)
themeStore.subscribe(({ theme }) => addToDoc(theme))

const useTheme = () => ({ ...themeStore(), themes })

export default useTheme
