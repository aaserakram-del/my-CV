# Asser Akram — Portfolio

موقع Portfolio شخصي مبني بـ **React + Vite + Tailwind CSS + Framer Motion**.

## التشغيل محليًا

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # يُنشئ مجلد dist
npm run preview    # معاينة نسخة الـ build
```

## هيكل المشروع

```
public/
  Asser-Akram-CV.pdf        ← ضع ملف الـ CV هنا بهذا الاسم
  profile-placeholder.svg   ← استبدلها بصورتك
  projects/                 ← صور المشاريع
src/
  data/
    projects.js             ← المشاريع (الملف الأهم)
    skills.js               ← المهارات
    site.js                 ← بياناتك الشخصية وروابط التواصل
  components/               ← كل Section في Component مستقل
  App.jsx
```

## إضافة مشروع جديد (أسهل طريقة)

1. (اختياري) ضع صورة المشروع داخل `public/projects/` مثل `public/projects/my-app.png`.
2. افتح `src/data/projects.js`.
3. انسخ Object جديد وضعه داخل الـ Array:

```js
export const projects = [
  {
    title: 'My New Project',
    description: 'وصف قصير لما يفعله المشروع.',
    image: '/projects/my-app.png',          // اتركها '' لاستخدام صورة افتراضية
    technologies: ['React', 'Tailwind CSS', 'REST API'],
    githubLink: 'https://github.com/username/my-app', // '' لإخفاء الزر
    liveDemo: 'https://my-app.vercel.app',            // '' لإخفاء الزر
  },
  // ...المشاريع القديمة
]
```

4. احفظ الملف — يظهر المشروع تلقائيًا في الموقع، ويتحدّث عدّاد "Projects" في قسم About أيضًا.

> ضع المشروع الأحدث في أول الـ Array ليظهر أولًا.
> عنوان المشروع (`title`) يُستخدم كمعرّف، لذا اجعله مختلفًا لكل مشروع.

## تعديل بياناتك

- **الاسم، النبذة، الصورة، الـ CV، الإيميل، GitHub، LinkedIn:** `src/data/site.js`
- **المهارات:** `src/data/skills.js`

لا تنسَ استبدال الروابط التجريبية (`your-username`, `your-email@example.com`).

## الرفع على Vercel

**من GitHub (الأفضل):**
1. ارفع المشروع على مستودع GitHub.
2. من [vercel.com](https://vercel.com) اختر **Add New → Project** ثم اختر المستودع.
3. Vercel يتعرّف على Vite تلقائيًا (Build: `npm run build`, Output: `dist`) — اضغط **Deploy**.

**من الـ CLI:**
```bash
npm i -g vercel
vercel
```

بعد ذلك أي `git push` يُحدّث الموقع تلقائيًا.
