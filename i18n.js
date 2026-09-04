/* ============================================================
   Übersetzungen.
   Eine Sprache ergänzen: Block kopieren, Kürzel anpassen,
   Eintrag in SPRACHEN hinzufügen. Fehlende Schlüssel fallen
   automatisch auf Englisch zurück.

   Werte mit {n} nutzen Pluralformen. Welche Formen eine Sprache
   braucht, entscheidet Intl.PluralRules – überzählige Formen
   schaden nicht, fehlende fallen auf "other" zurück.
   ============================================================ */

export const STANDARD = 'en';

/* Reihenfolge egal – die Auswahl wird alphabetisch sortiert ausgegeben. */
export const SPRACHEN = [
  { code: 'ar', name: 'العربية', rtl: true },
  { code: 'de', name: 'Deutsch'    },
  { code: 'en', name: 'English'    },
  { code: 'es', name: 'Español'    },
  { code: 'fr', name: 'Français'   },
  { code: 'it', name: 'Italiano'   },
  { code: 'nl', name: 'Nederlands' },
  { code: 'pl', name: 'Polski'     },
  { code: 'ru', name: 'Русский'    },
  { code: 'tr', name: 'Türkçe'     },
  { code: 'uk', name: 'Українська' },
];

/* Nach Eigenname sortiert. Intl.Collator ordnet innerhalb einer Schrift
   korrekt (ä bei a, ń bei n) und gruppiert Schriften zuverlässig. */
export function sprachenSortiert() {
  const c = new Intl.Collator(undefined, { sensitivity: 'base' });
  return [...SPRACHEN].sort((a, b) => c.compare(a.name, b.name));
}

export const TEXTE = {

/* ---------------------------------------------------------- */
en: {
  'app.title': 'Visitor counter',
  'lock.heading': 'Visitor counter',
  'lock.password': 'Password',
  'lock.unlock': 'Unlock',
  'lock.wrong': 'Wrong password. Please try again.',
  'lock.language': 'Language',

  'list.heading': 'Areas',
  'list.edit': 'Edit',
  'list.done': 'Done',
  'list.delete': 'Delete',
  'list.deleteConfirm': 'Delete “{name}” and all of its counting data?',
  'list.emptyTitle': 'No area set up yet.',
  'list.emptyText': 'Create an area with a name and a maximum number of guests. Every entrance that opens this page will then count towards the same total.',
  'list.errorTitle': 'No connection to the database.',
  'list.errorText': 'Check the internet connection. The list reloads by itself as soon as the connection is back.',
  'list.newArea': '+ Add new area',
  'list.name': 'Name of the area',
  'list.max': 'Maximum number of guests',
  'list.create': 'Create area',
  'list.cancel': 'Cancel',
  'list.createFailed': 'The area could not be created: {msg}',
  'list.deviceBefore': 'This device counts as',
  'list.change': 'change',
  'list.entrancePrompt': 'What is this entrance called?',
  'list.sharedNote': 'All devices share the same count. Open the page at every entrance and pick the same area.',

  'room.back': 'Areas',
  'room.stats': 'Statistics',
  'room.of': 'of {max}',
  'room.full': 'Full — do not let anyone else in',
  'room.free': { one: '{n} space left', other: '{n} spaces left' },
  'room.in': 'in',
  'room.out': 'out',
  'room.reset': 'Reset',
  'room.resetAsk': 'Set the counter to 0?',
  'room.resetYes': 'Yes, reset',
  'room.resetNo': 'Cancel',
  'room.resetFailed': 'Resetting did not work — please try again with a connection.',

  'banner.pending': { one: 'Offline — {n} count will be sent later', other: 'Offline — {n} counts will be sent later' },
  'banner.offline': 'No connection to the database',

  'stats.heading': 'Statistics',
  'stats.back': 'Back',
  'stats.loading': 'loading …',
  'stats.loadError': 'The data could not be loaded.',
  'stats.noDataTitle': 'There is no data for this day.',
  'stats.noDataText': 'As soon as counting starts in this area, the history appears here.',
  'stats.totalIn': 'went in in total',
  'stats.totalOut': 'went out in total',
  'stats.average': 'average inside',
  'stats.peak': 'peak, {time}',
  'stats.history': 'History',
  'stats.footnote': 'Maximum number of guests: {max}. The average is weighted over time, counted from the first entry of the day.',
  'stats.chartLabel': 'Occupancy over the day',

  'entrance.default': 'Entrance',
},

/* ---------------------------------------------------------- */
de: {
  'app.title': 'Besucher*innenzähler',
  'lock.heading': 'Besucher*innenzähler',
  'lock.password': 'Passwort',
  'lock.unlock': 'Entsperren',
  'lock.wrong': 'Passwort stimmt nicht. Nochmal probieren.',
  'lock.language': 'Sprache',

  'list.heading': 'Bereiche',
  'list.edit': 'Bearbeiten',
  'list.done': 'Fertig',
  'list.delete': 'Löschen',
  'list.deleteConfirm': '„{name}“ mit allen Zähldaten löschen?',
  'list.emptyTitle': 'Noch kein Bereich angelegt.',
  'list.emptyText': 'Leg einen Bereich mit Namen und maximaler Gästezahl an. Alle Eingänge, die diese Seite öffnen, zählen dann auf denselben Stand.',
  'list.errorTitle': 'Keine Verbindung zur Datenbank.',
  'list.errorText': 'Prüfe die Internetverbindung. Die Liste lädt sich automatisch, sobald die Verbindung wieder steht.',
  'list.newArea': '+ Neuen Bereich anlegen',
  'list.name': 'Name des Bereichs',
  'list.max': 'Maximale Gästezahl',
  'list.create': 'Bereich anlegen',
  'list.cancel': 'Abbrechen',
  'list.createFailed': 'Bereich konnte nicht angelegt werden: {msg}',
  'list.deviceBefore': 'Dieses Gerät zählt als',
  'list.change': 'ändern',
  'list.entrancePrompt': 'Wie heißt dieser Eingang?',
  'list.sharedNote': 'Alle Geräte teilen sich denselben Stand. Öffne die Seite an jedem Eingang und wähle denselben Bereich.',

  'room.back': 'Bereiche',
  'room.stats': 'Statistik',
  'room.of': 'von {max}',
  'room.full': 'Voll – niemanden mehr reinlassen',
  'room.free': { one: 'Noch {n} Platz frei', other: 'Noch {n} Plätze frei' },
  'room.in': 'rein',
  'room.out': 'raus',
  'room.reset': 'Zurücksetzen',
  'room.resetAsk': 'Zähler auf 0 setzen?',
  'room.resetYes': 'Ja, zurücksetzen',
  'room.resetNo': 'Abbrechen',
  'room.resetFailed': 'Zurücksetzen hat nicht geklappt – bitte mit Verbindung nochmal probieren.',

  'banner.pending': { one: 'Offline – {n} Zählung wird nachgereicht', other: 'Offline – {n} Zählungen werden nachgereicht' },
  'banner.offline': 'Keine Verbindung zur Datenbank',

  'stats.heading': 'Statistik',
  'stats.back': 'Zurück',
  'stats.loading': 'lädt …',
  'stats.loadError': 'Daten konnten nicht geladen werden.',
  'stats.noDataTitle': 'Für diesen Tag gibt es keine Daten.',
  'stats.noDataText': 'Sobald im Bereich gezählt wird, erscheint hier der Verlauf.',
  'stats.totalIn': 'insgesamt reingegangen',
  'stats.totalOut': 'insgesamt rausgegangen',
  'stats.average': 'durchschnittlich im Raum',
  'stats.peak': 'Höchststand, {time} Uhr',
  'stats.history': 'Verlauf',
  'stats.footnote': 'Maximale Gästezahl: {max}. Der Durchschnitt ist über die Zeit gewichtet, gerechnet ab der ersten Zählung des Tages.',
  'stats.chartLabel': 'Belegungsverlauf über den Tag',

  'entrance.default': 'Eingang',
},

/* ---------------------------------------------------------- */
tr: {
  'app.title': 'Ziyaretçi sayacı',
  'lock.heading': 'Ziyaretçi sayacı',
  'lock.password': 'Parola',
  'lock.unlock': 'Kilidi aç',
  'lock.wrong': 'Parola yanlış. Lütfen tekrar deneyin.',
  'lock.language': 'Dil',

  'list.heading': 'Alanlar',
  'list.edit': 'Düzenle',
  'list.done': 'Bitti',
  'list.delete': 'Sil',
  'list.deleteConfirm': '„{name}“ alanı ve tüm sayım verileri silinsin mi?',
  'list.emptyTitle': 'Henüz alan oluşturulmadı.',
  'list.emptyText': 'Bir ad ve azami misafir sayısı ile alan oluşturun. Bu sayfayı açan tüm girişler aynı toplama sayar.',
  'list.errorTitle': 'Veritabanına bağlantı yok.',
  'list.errorText': 'İnternet bağlantısını kontrol edin. Bağlantı geri geldiğinde liste kendiliğinden yüklenir.',
  'list.newArea': '+ Yeni alan oluştur',
  'list.name': 'Alanın adı',
  'list.max': 'Azami misafir sayısı',
  'list.create': 'Alan oluştur',
  'list.cancel': 'Vazgeç',
  'list.createFailed': 'Alan oluşturulamadı: {msg}',
  'list.deviceBefore': 'Bu cihaz şu adla sayıyor:',
  'list.change': 'değiştir',
  'list.entrancePrompt': 'Bu girişin adı nedir?',
  'list.sharedNote': 'Tüm cihazlar aynı sayımı paylaşır. Sayfayı her girişte açın ve aynı alanı seçin.',

  'room.back': 'Alanlar',
  'room.stats': 'İstatistik',
  'room.of': 'azami {max}',
  'room.full': 'Dolu – kimseyi içeri almayın',
  'room.free': { one: '{n} kişilik yer kaldı', other: '{n} kişilik yer kaldı' },
  'room.in': 'giriş',
  'room.out': 'çıkış',
  'room.reset': 'Sıfırla',
  'room.resetAsk': 'Sayaç sıfırlansın mı?',
  'room.resetYes': 'Evet, sıfırla',
  'room.resetNo': 'Vazgeç',
  'room.resetFailed': 'Sıfırlama başarısız oldu – lütfen bağlantı varken tekrar deneyin.',

  'banner.pending': { one: 'Çevrimdışı – {n} sayım sonra gönderilecek', other: 'Çevrimdışı – {n} sayım sonra gönderilecek' },
  'banner.offline': 'Veritabanına bağlantı yok',

  'stats.heading': 'İstatistik',
  'stats.back': 'Geri',
  'stats.loading': 'yükleniyor …',
  'stats.loadError': 'Veriler yüklenemedi.',
  'stats.noDataTitle': 'Bu gün için veri yok.',
  'stats.noDataText': 'Alanda sayım başlar başlamaz geçmiş burada görünür.',
  'stats.totalIn': 'toplam giren',
  'stats.totalOut': 'toplam çıkan',
  'stats.average': 'ortalama içeride',
  'stats.peak': 'en yüksek, {time}',
  'stats.history': 'Geçmiş',
  'stats.footnote': 'Azami misafir sayısı: {max}. Ortalama, günün ilk sayımından itibaren zamana göre ağırlıklandırılmıştır.',
  'stats.chartLabel': 'Gün boyunca doluluk',

  'entrance.default': 'Giriş',
},

/* ---------------------------------------------------------- */
ru: {
  'app.title': 'Счётчик посетителей',
  'lock.heading': 'Счётчик посетителей',
  'lock.password': 'Пароль',
  'lock.unlock': 'Разблокировать',
  'lock.wrong': 'Неверный пароль. Попробуйте ещё раз.',
  'lock.language': 'Язык',

  'list.heading': 'Зоны',
  'list.edit': 'Изменить',
  'list.done': 'Готово',
  'list.delete': 'Удалить',
  'list.deleteConfirm': 'Удалить «{name}» вместе со всеми данными подсчёта?',
  'list.emptyTitle': 'Зоны ещё не созданы.',
  'list.emptyText': 'Создайте зону с названием и максимальным числом гостей. Все входы, открывшие эту страницу, будут вести общий подсчёт.',
  'list.errorTitle': 'Нет соединения с базой данных.',
  'list.errorText': 'Проверьте интернет-соединение. Список загрузится сам, как только связь восстановится.',
  'list.newArea': '+ Создать зону',
  'list.name': 'Название зоны',
  'list.max': 'Максимальное число гостей',
  'list.create': 'Создать зону',
  'list.cancel': 'Отмена',
  'list.createFailed': 'Не удалось создать зону: {msg}',
  'list.deviceBefore': 'Это устройство считает как',
  'list.change': 'изменить',
  'list.entrancePrompt': 'Как называется этот вход?',
  'list.sharedNote': 'Все устройства ведут общий подсчёт. Откройте страницу на каждом входе и выберите одну и ту же зону.',

  'room.back': 'Зоны',
  'room.stats': 'Статистика',
  'room.of': 'из {max}',
  'room.full': 'Заполнено – больше никого не впускать',
  'room.free': {
    one: 'Осталось {n} место', few: 'Осталось {n} места',
    many: 'Осталось {n} мест', other: 'Осталось {n} места',
  },
  'room.in': 'вход',
  'room.out': 'выход',
  'room.reset': 'Сбросить',
  'room.resetAsk': 'Обнулить счётчик?',
  'room.resetYes': 'Да, сбросить',
  'room.resetNo': 'Отмена',
  'room.resetFailed': 'Сбросить не удалось – попробуйте ещё раз при наличии связи.',

  'banner.pending': {
    one: 'Офлайн – {n} отметка будет отправлена позже',
    few: 'Офлайн – {n} отметки будут отправлены позже',
    many: 'Офлайн – {n} отметок будут отправлены позже',
    other: 'Офлайн – {n} отметки будут отправлены позже',
  },
  'banner.offline': 'Нет соединения с базой данных',

  'stats.heading': 'Статистика',
  'stats.back': 'Назад',
  'stats.loading': 'загрузка …',
  'stats.loadError': 'Не удалось загрузить данные.',
  'stats.noDataTitle': 'За этот день данных нет.',
  'stats.noDataText': 'Как только в зоне начнётся подсчёт, здесь появится история.',
  'stats.totalIn': 'всего вошло',
  'stats.totalOut': 'всего вышло',
  'stats.average': 'в среднем внутри',
  'stats.peak': 'максимум, {time}',
  'stats.history': 'История',
  'stats.footnote': 'Максимальное число гостей: {max}. Среднее взвешено по времени, начиная с первого подсчёта за день.',
  'stats.chartLabel': 'Заполненность в течение дня',

  'entrance.default': 'Вход',
},

/* ---------------------------------------------------------- */
uk: {
  'app.title': 'Лічильник відвідувачів',
  'lock.heading': 'Лічильник відвідувачів',
  'lock.password': 'Пароль',
  'lock.unlock': 'Розблокувати',
  'lock.wrong': 'Неправильний пароль. Спробуйте ще раз.',
  'lock.language': 'Мова',

  'list.heading': 'Зони',
  'list.edit': 'Редагувати',
  'list.done': 'Готово',
  'list.delete': 'Видалити',
  'list.deleteConfirm': 'Видалити «{name}» разом з усіма даними підрахунку?',
  'list.emptyTitle': 'Зон ще не створено.',
  'list.emptyText': 'Створіть зону з назвою та максимальною кількістю гостей. Усі входи, що відкриють цю сторінку, вестимуть спільний підрахунок.',
  'list.errorTitle': 'Немає з’єднання з базою даних.',
  'list.errorText': 'Перевірте інтернет-з’єднання. Список завантажиться сам, щойно зв’язок відновиться.',
  'list.newArea': '+ Створити зону',
  'list.name': 'Назва зони',
  'list.max': 'Максимальна кількість гостей',
  'list.create': 'Створити зону',
  'list.cancel': 'Скасувати',
  'list.createFailed': 'Не вдалося створити зону: {msg}',
  'list.deviceBefore': 'Цей пристрій рахує як',
  'list.change': 'змінити',
  'list.entrancePrompt': 'Як називається цей вхід?',
  'list.sharedNote': 'Усі пристрої ведуть спільний підрахунок. Відкрийте сторінку на кожному вході та виберіть ту саму зону.',

  'room.back': 'Зони',
  'room.stats': 'Статистика',
  'room.of': 'з {max}',
  'room.full': 'Заповнено – більше нікого не впускати',
  'room.free': {
    one: 'Залишилося {n} місце', few: 'Залишилося {n} місця',
    many: 'Залишилося {n} місць', other: 'Залишилося {n} місця',
  },
  'room.in': 'вхід',
  'room.out': 'вихід',
  'room.reset': 'Скинути',
  'room.resetAsk': 'Обнулити лічильник?',
  'room.resetYes': 'Так, скинути',
  'room.resetNo': 'Скасувати',
  'room.resetFailed': 'Не вдалося скинути – спробуйте ще раз за наявності зв’язку.',

  'banner.pending': {
    one: 'Офлайн – {n} відмітка буде надіслана пізніше',
    few: 'Офлайн – {n} відмітки будуть надіслані пізніше',
    many: 'Офлайн – {n} відміток будуть надіслані пізніше',
    other: 'Офлайн – {n} відмітки будуть надіслані пізніше',
  },
  'banner.offline': 'Немає з’єднання з базою даних',

  'stats.heading': 'Статистика',
  'stats.back': 'Назад',
  'stats.loading': 'завантаження …',
  'stats.loadError': 'Не вдалося завантажити дані.',
  'stats.noDataTitle': 'За цей день даних немає.',
  'stats.noDataText': 'Щойно в зоні почнеться підрахунок, тут з’явиться історія.',
  'stats.totalIn': 'усього увійшло',
  'stats.totalOut': 'усього вийшло',
  'stats.average': 'у середньому всередині',
  'stats.peak': 'максимум, {time}',
  'stats.history': 'Історія',
  'stats.footnote': 'Максимальна кількість гостей: {max}. Середнє зважене за часом, починаючи з першого підрахунку за день.',
  'stats.chartLabel': 'Заповненість протягом дня',

  'entrance.default': 'Вхід',
},

/* ---------------------------------------------------------- */
pl: {
  'app.title': 'Licznik odwiedzających',
  'lock.heading': 'Licznik odwiedzających',
  'lock.password': 'Hasło',
  'lock.unlock': 'Odblokuj',
  'lock.wrong': 'Nieprawidłowe hasło. Spróbuj ponownie.',
  'lock.language': 'Język',

  'list.heading': 'Strefy',
  'list.edit': 'Edytuj',
  'list.done': 'Gotowe',
  'list.delete': 'Usuń',
  'list.deleteConfirm': 'Usunąć „{name}“ wraz ze wszystkimi danymi zliczania?',
  'list.emptyTitle': 'Nie utworzono jeszcze żadnej strefy.',
  'list.emptyText': 'Utwórz strefę z nazwą i maksymalną liczbą gości. Wszystkie wejścia, które otworzą tę stronę, będą liczyć wspólnie.',
  'list.errorTitle': 'Brak połączenia z bazą danych.',
  'list.errorText': 'Sprawdź połączenie internetowe. Lista wczyta się sama, gdy połączenie wróci.',
  'list.newArea': '+ Utwórz nową strefę',
  'list.name': 'Nazwa strefy',
  'list.max': 'Maksymalna liczba gości',
  'list.create': 'Utwórz strefę',
  'list.cancel': 'Anuluj',
  'list.createFailed': 'Nie udało się utworzyć strefy: {msg}',
  'list.deviceBefore': 'To urządzenie liczy jako',
  'list.change': 'zmień',
  'list.entrancePrompt': 'Jak nazywa się to wejście?',
  'list.sharedNote': 'Wszystkie urządzenia mają wspólny licznik. Otwórz stronę przy każdym wejściu i wybierz tę samą strefę.',

  'room.back': 'Strefy',
  'room.stats': 'Statystyki',
  'room.of': 'z {max}',
  'room.full': 'Pełno – nie wpuszczaj nikogo więcej',
  'room.free': {
    one: 'Zostało {n} miejsce', few: 'Zostały {n} miejsca',
    many: 'Zostało {n} miejsc', other: 'Zostało {n} miejsca',
  },
  'room.in': 'wejście',
  'room.out': 'wyjście',
  'room.reset': 'Wyzeruj',
  'room.resetAsk': 'Wyzerować licznik?',
  'room.resetYes': 'Tak, wyzeruj',
  'room.resetNo': 'Anuluj',
  'room.resetFailed': 'Nie udało się wyzerować – spróbuj ponownie przy połączeniu.',

  'banner.pending': {
    one: 'Offline – {n} zliczenie zostanie wysłane później',
    few: 'Offline – {n} zliczenia zostaną wysłane później',
    many: 'Offline – {n} zliczeń zostanie wysłanych później',
    other: 'Offline – {n} zliczenia zostaną wysłane później',
  },
  'banner.offline': 'Brak połączenia z bazą danych',

  'stats.heading': 'Statystyki',
  'stats.back': 'Wstecz',
  'stats.loading': 'wczytywanie …',
  'stats.loadError': 'Nie udało się wczytać danych.',
  'stats.noDataTitle': 'Brak danych dla tego dnia.',
  'stats.noDataText': 'Gdy tylko rozpocznie się zliczanie w strefie, pojawi się tu historia.',
  'stats.totalIn': 'łącznie weszło',
  'stats.totalOut': 'łącznie wyszło',
  'stats.average': 'średnio w środku',
  'stats.peak': 'szczyt, {time}',
  'stats.history': 'Historia',
  'stats.footnote': 'Maksymalna liczba gości: {max}. Średnia jest ważona czasem, licząc od pierwszego zliczenia w danym dniu.',
  'stats.chartLabel': 'Obłożenie w ciągu dnia',

  'entrance.default': 'Wejście',
},

/* ---------------------------------------------------------- */
es: {
  'app.title': 'Contador de visitantes',
  'lock.heading': 'Contador de visitantes',
  'lock.password': 'Contraseña',
  'lock.unlock': 'Desbloquear',
  'lock.wrong': 'Contraseña incorrecta. Inténtalo de nuevo.',
  'lock.language': 'Idioma',

  'list.heading': 'Zonas',
  'list.edit': 'Editar',
  'list.done': 'Listo',
  'list.delete': 'Eliminar',
  'list.deleteConfirm': '¿Eliminar «{name}» con todos sus datos de recuento?',
  'list.emptyTitle': 'Todavía no hay ninguna zona.',
  'list.emptyText': 'Crea una zona con un nombre y un número máximo de invitados. Todas las entradas que abran esta página contarán sobre el mismo total.',
  'list.errorTitle': 'Sin conexión con la base de datos.',
  'list.errorText': 'Comprueba la conexión a internet. La lista se recarga sola en cuanto vuelva la conexión.',
  'list.newArea': '+ Crear zona nueva',
  'list.name': 'Nombre de la zona',
  'list.max': 'Número máximo de invitados',
  'list.create': 'Crear zona',
  'list.cancel': 'Cancelar',
  'list.createFailed': 'No se ha podido crear la zona: {msg}',
  'list.deviceBefore': 'Este dispositivo cuenta como',
  'list.change': 'cambiar',
  'list.entrancePrompt': '¿Cómo se llama esta entrada?',
  'list.sharedNote': 'Todos los dispositivos comparten el mismo recuento. Abre la página en cada entrada y elige la misma zona.',

  'room.back': 'Zonas',
  'room.stats': 'Estadísticas',
  'room.of': 'de {max}',
  'room.full': 'Lleno – no dejes entrar a nadie más',
  'room.free': { one: '{n} plaza libre', other: '{n} plazas libres' },
  'room.in': 'entra',
  'room.out': 'sale',
  'room.reset': 'Poner a cero',
  'room.resetAsk': '¿Poner el contador a 0?',
  'room.resetYes': 'Sí, poner a cero',
  'room.resetNo': 'Cancelar',
  'room.resetFailed': 'No se ha podido poner a cero: inténtalo de nuevo con conexión.',

  'banner.pending': {
    one: 'Sin conexión – {n} recuento se enviará más tarde',
    other: 'Sin conexión – {n} recuentos se enviarán más tarde',
  },
  'banner.offline': 'Sin conexión con la base de datos',

  'stats.heading': 'Estadísticas',
  'stats.back': 'Atrás',
  'stats.loading': 'cargando …',
  'stats.loadError': 'No se han podido cargar los datos.',
  'stats.noDataTitle': 'No hay datos para este día.',
  'stats.noDataText': 'En cuanto se empiece a contar en la zona, aquí aparecerá el historial.',
  'stats.totalIn': 'han entrado en total',
  'stats.totalOut': 'han salido en total',
  'stats.average': 'media dentro',
  'stats.peak': 'máximo, {time}',
  'stats.history': 'Historial',
  'stats.footnote': 'Número máximo de invitados: {max}. La media está ponderada en el tiempo, a partir del primer recuento del día.',
  'stats.chartLabel': 'Ocupación a lo largo del día',

  'entrance.default': 'Entrada',
},

/* ---------------------------------------------------------- */
nl: {
  'app.title': 'Bezoekersteller',
  'lock.heading': 'Bezoekersteller',
  'lock.password': 'Wachtwoord',
  'lock.unlock': 'Ontgrendelen',
  'lock.wrong': 'Wachtwoord klopt niet. Probeer het opnieuw.',
  'lock.language': 'Taal',

  'list.heading': 'Zones',
  'list.edit': 'Bewerken',
  'list.done': 'Klaar',
  'list.delete': 'Verwijderen',
  'list.deleteConfirm': '„{name}“ met alle telgegevens verwijderen?',
  'list.emptyTitle': 'Nog geen zone aangemaakt.',
  'list.emptyText': 'Maak een zone aan met een naam en een maximaal aantal gasten. Alle ingangen die deze pagina openen, tellen dan op hetzelfde totaal.',
  'list.errorTitle': 'Geen verbinding met de database.',
  'list.errorText': 'Controleer de internetverbinding. De lijst laadt vanzelf zodra de verbinding terug is.',
  'list.newArea': '+ Nieuwe zone aanmaken',
  'list.name': 'Naam van de zone',
  'list.max': 'Maximaal aantal gasten',
  'list.create': 'Zone aanmaken',
  'list.cancel': 'Annuleren',
  'list.createFailed': 'De zone kon niet worden aangemaakt: {msg}',
  'list.deviceBefore': 'Dit apparaat telt als',
  'list.change': 'wijzigen',
  'list.entrancePrompt': 'Hoe heet deze ingang?',
  'list.sharedNote': 'Alle apparaten delen dezelfde telling. Open de pagina bij elke ingang en kies dezelfde zone.',

  'room.back': 'Zones',
  'room.stats': 'Statistieken',
  'room.of': 'van {max}',
  'room.full': 'Vol – niemand meer binnenlaten',
  'room.free': { one: 'Nog {n} plek vrij', other: 'Nog {n} plekken vrij' },
  'room.in': 'in',
  'room.out': 'uit',
  'room.reset': 'Op nul zetten',
  'room.resetAsk': 'Teller op 0 zetten?',
  'room.resetYes': 'Ja, op nul',
  'room.resetNo': 'Annuleren',
  'room.resetFailed': 'Op nul zetten is mislukt – probeer het opnieuw met verbinding.',

  'banner.pending': {
    one: 'Offline – {n} telling wordt later verstuurd',
    other: 'Offline – {n} tellingen worden later verstuurd',
  },
  'banner.offline': 'Geen verbinding met de database',

  'stats.heading': 'Statistieken',
  'stats.back': 'Terug',
  'stats.loading': 'laden …',
  'stats.loadError': 'De gegevens konden niet worden geladen.',
  'stats.noDataTitle': 'Er zijn geen gegevens voor deze dag.',
  'stats.noDataText': 'Zodra er in de zone geteld wordt, verschijnt hier het verloop.',
  'stats.totalIn': 'in totaal naar binnen',
  'stats.totalOut': 'in totaal naar buiten',
  'stats.average': 'gemiddeld binnen',
  'stats.peak': 'piek, {time}',
  'stats.history': 'Verloop',
  'stats.footnote': 'Maximaal aantal gasten: {max}. Het gemiddelde is gewogen naar tijd, gerekend vanaf de eerste telling van de dag.',
  'stats.chartLabel': 'Bezetting gedurende de dag',

  'entrance.default': 'Ingang',
},

/* ---------------------------------------------------------- */
ar: {
  'app.title': 'عدّاد الزوار',
  'lock.heading': 'عدّاد الزوار',
  'lock.password': 'كلمة المرور',
  'lock.unlock': 'فتح',
  'lock.wrong': 'كلمة المرور غير صحيحة. حاول مرة أخرى.',
  'lock.language': 'اللغة',

  'list.heading': 'المناطق',
  'list.edit': 'تعديل',
  'list.done': 'تم',
  'list.delete': 'حذف',
  'list.deleteConfirm': 'هل تريد حذف «{name}» مع جميع بيانات العدّ؟',
  'list.emptyTitle': 'لم يتم إنشاء أي منطقة بعد.',
  'list.emptyText': 'أنشئ منطقة باسم وعدد أقصى من الضيوف. كل المداخل التي تفتح هذه الصفحة ستعدّ على المجموع نفسه.',
  'list.errorTitle': 'لا يوجد اتصال بقاعدة البيانات.',
  'list.errorText': 'تحقق من الاتصال بالإنترنت. ستُحمَّل القائمة تلقائياً عند عودة الاتصال.',
  'list.newArea': '+ إنشاء منطقة جديدة',
  'list.name': 'اسم المنطقة',
  'list.max': 'الحد الأقصى لعدد الضيوف',
  'list.create': 'إنشاء المنطقة',
  'list.cancel': 'إلغاء',
  'list.createFailed': 'تعذّر إنشاء المنطقة: {msg}',
  'list.deviceBefore': 'يعدّ هذا الجهاز باسم',
  'list.change': 'تغيير',
  'list.entrancePrompt': 'ما اسم هذا المدخل؟',
  'list.sharedNote': 'تشترك جميع الأجهزة في العدد نفسه. افتح الصفحة عند كل مدخل واختر المنطقة نفسها.',

  'room.back': 'المناطق',
  'room.stats': 'الإحصاءات',
  'room.of': 'من {max}',
  'room.full': 'ممتلئ – لا تسمح بدخول أحد',
  'room.free': {
    zero: 'لم يبقَ مكان', one: 'بقي مكان واحد', two: 'بقي مكانان',
    few: 'بقي {n} أماكن', many: 'بقي {n} مكاناً', other: 'بقي {n} مكان',
  },
  'room.in': 'دخول',
  'room.out': 'خروج',
  'room.reset': 'إعادة الضبط',
  'room.resetAsk': 'هل تريد ضبط العدّاد على صفر؟',
  'room.resetYes': 'نعم، أعد الضبط',
  'room.resetNo': 'إلغاء',
  'room.resetFailed': 'فشلت إعادة الضبط – حاول مرة أخرى عند توفر الاتصال.',

  'banner.pending': {
    zero: 'غير متصل', one: 'غير متصل – سيتم إرسال عدّة واحدة لاحقاً',
    two: 'غير متصل – سيتم إرسال عدّتين لاحقاً',
    few: 'غير متصل – سيتم إرسال {n} عدّات لاحقاً',
    many: 'غير متصل – سيتم إرسال {n} عدّة لاحقاً',
    other: 'غير متصل – سيتم إرسال {n} عدّة لاحقاً',
  },
  'banner.offline': 'لا يوجد اتصال بقاعدة البيانات',

  'stats.heading': 'الإحصاءات',
  'stats.back': 'رجوع',
  'stats.loading': 'جارٍ التحميل …',
  'stats.loadError': 'تعذّر تحميل البيانات.',
  'stats.noDataTitle': 'لا توجد بيانات لهذا اليوم.',
  'stats.noDataText': 'بمجرد بدء العدّ في المنطقة سيظهر السجل هنا.',
  'stats.totalIn': 'إجمالي الداخلين',
  'stats.totalOut': 'إجمالي الخارجين',
  'stats.average': 'المتوسط في الداخل',
  'stats.peak': 'الذروة، {time}',
  'stats.history': 'السجل',
  'stats.footnote': 'الحد الأقصى لعدد الضيوف: {max}. المتوسط مرجّح زمنياً بدءاً من أول عدّة في اليوم.',
  'stats.chartLabel': 'الإشغال خلال اليوم',

  'entrance.default': 'مدخل',
},

/* ---------------------------------------------------------- */
it: {
  'app.title': 'Contatore visitatori',
  'lock.heading': 'Contatore visitatori',
  'lock.password': 'Password',
  'lock.unlock': 'Sblocca',
  'lock.wrong': 'Password errata. Riprova.',
  'lock.language': 'Lingua',

  'list.heading': 'Aree',
  'list.edit': 'Modifica',
  'list.done': 'Fatto',
  'list.delete': 'Elimina',
  'list.deleteConfirm': 'Eliminare «{name}» con tutti i dati di conteggio?',
  'list.emptyTitle': 'Nessuna area ancora creata.',
  'list.emptyText': 'Crea un’area con un nome e un numero massimo di ospiti. Tutti gli ingressi che aprono questa pagina conteranno sullo stesso totale.',
  'list.errorTitle': 'Nessuna connessione al database.',
  'list.errorText': 'Controlla la connessione a internet. L’elenco si ricarica da solo appena torna la connessione.',
  'list.newArea': '+ Crea nuova area',
  'list.name': 'Nome dell’area',
  'list.max': 'Numero massimo di ospiti',
  'list.create': 'Crea area',
  'list.cancel': 'Annulla',
  'list.createFailed': 'Impossibile creare l’area: {msg}',
  'list.deviceBefore': 'Questo dispositivo conta come',
  'list.change': 'modifica',
  'list.entrancePrompt': 'Come si chiama questo ingresso?',
  'list.sharedNote': 'Tutti i dispositivi condividono lo stesso conteggio. Apri la pagina a ogni ingresso e scegli la stessa area.',

  'room.back': 'Aree',
  'room.stats': 'Statistiche',
  'room.of': 'su {max}',
  'room.full': 'Pieno – non far entrare più nessuno',
  'room.free': { one: '{n} posto libero', other: '{n} posti liberi' },
  'room.in': 'entra',
  'room.out': 'esce',
  'room.reset': 'Azzera',
  'room.resetAsk': 'Azzerare il contatore?',
  'room.resetYes': 'Sì, azzera',
  'room.resetNo': 'Annulla',
  'room.resetFailed': 'Azzeramento non riuscito – riprova con la connessione attiva.',

  'banner.pending': {
    one: 'Offline – {n} conteggio verrà inviato più tardi',
    other: 'Offline – {n} conteggi verranno inviati più tardi',
  },
  'banner.offline': 'Nessuna connessione al database',

  'stats.heading': 'Statistiche',
  'stats.back': 'Indietro',
  'stats.loading': 'caricamento …',
  'stats.loadError': 'Impossibile caricare i dati.',
  'stats.noDataTitle': 'Non ci sono dati per questo giorno.',
  'stats.noDataText': 'Appena inizia il conteggio nell’area, qui comparirà lo storico.',
  'stats.totalIn': 'entrati in totale',
  'stats.totalOut': 'usciti in totale',
  'stats.average': 'media all’interno',
  'stats.peak': 'picco, {time}',
  'stats.history': 'Storico',
  'stats.footnote': 'Numero massimo di ospiti: {max}. La media è ponderata nel tempo, a partire dal primo conteggio della giornata.',
  'stats.chartLabel': 'Occupazione durante la giornata',

  'entrance.default': 'Ingresso',
},

/* ---------------------------------------------------------- */
fr: {
  'app.title': 'Compteur de visiteurs',
  'lock.heading': 'Compteur de visiteurs',
  'lock.password': 'Mot de passe',
  'lock.unlock': 'Déverrouiller',
  'lock.wrong': 'Mot de passe incorrect. Réessayez.',
  'lock.language': 'Langue',

  'list.heading': 'Zones',
  'list.edit': 'Modifier',
  'list.done': 'Terminé',
  'list.delete': 'Supprimer',
  'list.deleteConfirm': 'Supprimer « {name} » avec toutes ses données de comptage ?',
  'list.emptyTitle': 'Aucune zone créée pour le moment.',
  'list.emptyText': 'Créez une zone avec un nom et un nombre maximal d’invités. Toutes les entrées qui ouvrent cette page compteront sur le même total.',
  'list.errorTitle': 'Aucune connexion à la base de données.',
  'list.errorText': 'Vérifiez la connexion internet. La liste se recharge dès que la connexion revient.',
  'list.newArea': '+ Créer une zone',
  'list.name': 'Nom de la zone',
  'list.max': 'Nombre maximal d’invités',
  'list.create': 'Créer la zone',
  'list.cancel': 'Annuler',
  'list.createFailed': 'Impossible de créer la zone : {msg}',
  'list.deviceBefore': 'Cet appareil compte comme',
  'list.change': 'modifier',
  'list.entrancePrompt': 'Comment s’appelle cette entrée ?',
  'list.sharedNote': 'Tous les appareils partagent le même compteur. Ouvrez la page à chaque entrée et choisissez la même zone.',

  'room.back': 'Zones',
  'room.stats': 'Statistiques',
  'room.of': 'sur {max}',
  'room.full': 'Complet – ne laissez plus entrer personne',
  'room.free': { one: '{n} place libre', other: '{n} places libres' },
  'room.in': 'entrée',
  'room.out': 'sortie',
  'room.reset': 'Réinitialiser',
  'room.resetAsk': 'Remettre le compteur à 0 ?',
  'room.resetYes': 'Oui, réinitialiser',
  'room.resetNo': 'Annuler',
  'room.resetFailed': 'La réinitialisation a échoué – réessayez avec une connexion.',

  'banner.pending': {
    one: 'Hors ligne – {n} comptage sera envoyé plus tard',
    other: 'Hors ligne – {n} comptages seront envoyés plus tard',
  },
  'banner.offline': 'Aucune connexion à la base de données',

  'stats.heading': 'Statistiques',
  'stats.back': 'Retour',
  'stats.loading': 'chargement …',
  'stats.loadError': 'Impossible de charger les données.',
  'stats.noDataTitle': 'Aucune donnée pour ce jour.',
  'stats.noDataText': 'Dès que le comptage commence dans la zone, l’historique apparaît ici.',
  'stats.totalIn': 'entrées au total',
  'stats.totalOut': 'sorties au total',
  'stats.average': 'moyenne à l’intérieur',
  'stats.peak': 'pic, {time}',
  'stats.history': 'Historique',
  'stats.footnote': 'Nombre maximal d’invités : {max}. La moyenne est pondérée dans le temps, à partir du premier comptage de la journée.',
  'stats.chartLabel': 'Occupation au cours de la journée',

  'entrance.default': 'Entrée',
},

};

/* ============================================================
   Auswahl und Ausgabe
   ============================================================ */

export function istRtl(code) {
  return SPRACHEN.some(s => s.code === code && s.rtl);
}

/* Passende Sprache aus den Browsereinstellungen, sonst Englisch. */
export function spracheRaten() {
  const vorhanden = SPRACHEN.map(s => s.code);
  for (const wunsch of navigator.languages || [navigator.language || '']) {
    const kurz = String(wunsch).toLowerCase().split('-')[0];
    if (vorhanden.includes(kurz)) return kurz;
  }
  return STANDARD;
}

const pluralCache = new Map();
function pluralForm(code, n) {
  if (!pluralCache.has(code)) {
    try { pluralCache.set(code, new Intl.PluralRules(code)); }
    catch { pluralCache.set(code, new Intl.PluralRules(STANDARD)); }
  }
  return pluralCache.get(code).select(n);
}

/* t('room.free', { n: 3 }) – fehlt ein Schlüssel, greift Englisch;
   fehlt er auch dort, kommt der Schlüssel selbst zurück, damit die
   Lücke im Test sofort auffällt statt leer zu bleiben. */
export function uebersetze(code, schluessel, werte = {}) {
  let wert = (TEXTE[code] || {})[schluessel];
  if (wert === undefined) wert = (TEXTE[STANDARD] || {})[schluessel];
  if (wert === undefined) return schluessel;

  if (typeof wert === 'object') {
    const n = Number(werte.n ?? 0);
    const form = pluralForm(code, n);
    wert = wert[form] ?? wert.other ?? wert.one ?? Object.values(wert)[0];
  }

  return String(wert).replace(/\{(\w+)\}/g, (_, k) =>
    werte[k] === undefined ? `{${k}}` : String(werte[k]));
}
