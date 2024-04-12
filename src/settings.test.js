const Settings = require('./settings')

test('получение настроек по умолчанию', () => {
	const settings = new Settings()
	expect(settings.settings.get('theme')).toBe('dark')
	expect(settings.settings.get('music')).toBe('trance')
	expect(settings.settings.get('difficulty')).toBe('easy')
})

test('изменение настроек пользователем', () => {
	const settings = new Settings()
	settings.setSetting('theme', 'light')
	expect(settings.settings.get('theme')).toBe('light')
})
