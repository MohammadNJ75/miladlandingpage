"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function BookChapters() {
  const chapters = [
    {
      title: "Introduction:فصل 1",
      content:
        "فصل یک میکروتیک معمولاً به معرفی پایه‌ای این سیستم‌عامل و تجهیزات شبکه می‌پردازد. در این فصل، مفاهیم کلیدی مثل ساختار سیستم‌عامل، انواع روترها و سوئیچ‌ها، و نحوه تنظیمات ابتدایی برای ایجاد یک شبکه مؤثر بررسی می‌شود.",
      sections: [
        { title: "About MikroTik", pages: "1-14", difficulty: "مبتدی" },
        {
          title: "Training Programs",
          pages: "15-28",
          difficulty: "مبتدی",
        },
        {
          title: "What is RouterOS",
          pages: "29-42",
          difficulty: "متوسط",
        },
        {
          title: "Accessing the Router",
          pages: "43-56",
          difficulty: "پیشرفته",
        },
        {
          title: "WinBox",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "راهنمای دانلود نرم‌افزار WinBox از سایت میکروتیک",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "شرح گزینه‌های مختلف در نرم‌افزار WinBox",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Console",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "مراحل اتصال از طریق کنسول سریال",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "مراحل اتصال به RouterOS از طریق SSH",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "مراحل اتصال به RouterOS از طریق Telnet",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "WebFig",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "مراحل اتصال به RouterOS از طریق HTTP یا HTTPS",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Command line",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "استفاده از کلید TAB در Command Line میکروتیک",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "استفاده از کلید F1 در Command Line",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "استفاده از Double TAB در Command Line میکروتیک",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "استفاده از کلیدهای جهت بالا و پایین (↑↓) در Command Line",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "استفاده از کلیدهای ترکیبی CTRL + L در Command Line",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Type of Configuration",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Basic Configuration (تنظیمات اولیه) ",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Blank Configuration (بدون تنظیمات) ",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Custom Configuration (تنظیمات سفارشی)",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "تغییرات در نسخه‌های جدید میکروتیک",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "حذف تنظیمات اولیه",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "گزینه‌های موجود در  Reset Configuration",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Identity",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "نحوه تغییر نام روتر در میکروتیک",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Updating RouterOS",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "روش Download File (دانلود و نصب دستی)",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "بررسی تغییرات ورژن‌های RouterOS قبل از آپدیت",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Downgrade RouterOS",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Firmware",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "مراحل آپدیت Firmware",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "فعال کردن آپدیت خودکار Firmware",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Users",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "چرا ایجاد کاربران جداگانه اهمیت دارد؟",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "مراحل ایجاد و مدیریت کاربران در RouterOS",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "ایجاد کاربر جدید",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Groups",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "گروه‌های پیش‌فرض در RouterOS",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "ایجاد گروه‌های جدید با دسترسی‌های سفارشی",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "نحوه تغییر شماره پورت یا غیرفعال کردن سرویس‌ها",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "آیا تغییر شماره پورت امنیت را افزایش می‌دهد؟",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "تغییر شماره پورت چه زمانی کارایی دارد؟",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "List",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "ایجاد لیست جدید",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "ترتیب عضویت اینترفیس‌ها در لیست",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "NTP",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "مشکل زمانی در روترهای میکروتیک",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "پیکربندی NTP Client در RouterOS",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "اتصال به سرور NTP اینترنتی",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "تنظیم دستی تاریخ و زمان در RouterOS",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Backup",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "بکاپ به روش Binary Backup",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "مراحل تهیه Binary Backup",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "بازگردانی فایل بکاپ در RouterOS",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Export Backup",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "ویژگی‌های Export Backup",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "نحوه تهیه بکاپ با روش Export",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "بازگردانی تنظیمات از فایل Export",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "Reset Password",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
        {
          title: "مراحل Reset Password به روش سخت‌افزاری",
          pages: "57-62",
          difficulty: "تمام سطوح",
        },
      ],
    },
    {
      title: " DHCP:فصل دوم",
      content:
        "فصل یک میکروتیک معمولاً به معرفی پایه‌ای این سیستم‌عامل و تجهیزات شبکه می‌پردازد. در این فصل، مفاهیم کلیدی مثل ساختار سیستم‌عامل، انواع روترها و سوئیچ‌ها، و نحوه تنظیمات ابتدایی برای ایجاد یک شبکه مؤثر بررسی می‌شود.",
      sections: [
        {
          title: "هدف DHCP و اهمیت آن در شبکه",
          pages: "63-76",
          difficulty: "متوسط",
        },
        {
          title: "اصطلاحات استاندارد در DHCP",
          pages: "77-90",
          difficulty: "پیشرفته",
        },
        {
          title: "DHCP Message",
          pages: "91-104",
          difficulty: "متوسط",
        },
        {
          title: "مراحل عملکرد DHCP و پیام‌های آن",
          pages: "105-118",
          difficulty: "مبتدی",
        },
        {
          title: "DHCP Client",
          pages: "119-132",
          difficulty: "مبتدی",
        },
        {
          title: "مراحل فعال‌سازی DHCP Client",
          pages: "119-132",
          difficulty: "مبتدی",
        },
        {
          title: "DHCP Server	",
          pages: "119-132",
          difficulty: "مبتدی",
        },
        {
          title: "مراحل راه‌اندازی DHCP Server در RouterOS",
          pages: "119-132",
          difficulty: "مبتدی",
        },
        {
          title: "به چه صورت به اینترفیس آدرس IP اختصاص دهیم؟	",
          pages: "119-132",
          difficulty: "مبتدی",
        },
        {
          title: "مدیریت کلاینت‌ها با استفاده از تب Leases",
          pages: "119-132",
          difficulty: "مبتدی",
        },
        {
          title: "عملکردهای مهم در تب Leases",
          pages: "119-132",
          difficulty: "مبتدی",
        },
        {
          title: "ARP	",
          pages: "119-132",
          difficulty: "مبتدی",
        },
        {
          title: "نحوه عملکرد ARP	",
          pages: "119-132",
          difficulty: "مبتدی",
        },
        {
          title: "ARP Table در RouterOS",
          pages: "119-132",
          difficulty: "مبتدی",
        },
        {
          title: "ARP Mode در RouterOS",
          pages: "119-132",
          difficulty: "مبتدی",
        },
      ],
    },
    {
      title: " Bridge:فصل سوم",
      content:
        "فصل یک میکروتیک معمولاً به معرفی پایه‌ای این سیستم‌عامل و تجهیزات شبکه می‌پردازد. در این فصل، مفاهیم کلیدی مثل ساختار سیستم‌عامل، انواع روترها و سوئیچ‌ها، و نحوه تنظیمات ابتدایی برای ایجاد یک شبکه مؤثر بررسی می‌شود.",
      sections: [
        {
          title: "Add Bridge",
          pages: "133-146",
          difficulty: "متوسط",
        },
        {
          title: "اضافه کردن پورت‌ها به Bridge",
          pages: "147-160",
          difficulty: "مبتدی",
        },
        {
          title: "مدیریت Loopها در Bridge",
          pages: "161-174",
          difficulty: "مبتدی",
        },
      ],
    },
    {
      title: "Routing:فصل چهارم",
      content:
        "فصل یک میکروتیک معمولاً به معرفی پایه‌ای این سیستم‌عامل و تجهیزات شبکه می‌پردازد. در این فصل، مفاهیم کلیدی مثل ساختار سیستم‌عامل، انواع روترها و سوئیچ‌ها، و نحوه تنظیمات ابتدایی برای ایجاد یک شبکه مؤثر بررسی می‌شود.",
      sections: [
        {
          title: "روتینگ چیست؟",
          pages: "203-216",
          difficulty: "متوسط",
        },
        {
          title: "Node",
          pages: "217-230",
          difficulty: "مبتدی",
        },
        {
          title: "روتینگ چطور کار می‌کند؟	",
          pages: "231-244",
          difficulty: "پیشرفته",
        },
        {
          title: "تعریف Gateway در شبکه	",
          pages: "245-258",
          difficulty: "پیشرفته",
        },
        {
          title: "اصول روتینگ در شبکه	",
          pages: "259-272",
          difficulty: "متوسط",
        },
        {
          title: "Routing Table",
          pages: "259-272",
          difficulty: "متوسط",
        },
        {
          title: "Flagهای مرتبط با روت‌ها	",
          pages: "259-272",
          difficulty: "متوسط",
        },
        {
          title: "Add Route	",
          pages: "259-272",
          difficulty: "متوسط",
        },
        {
          title: "Route State",
          pages: "259-272",
          difficulty: "متوسط",
        },
      ],
    },
    {
      title: " Firewall:فصل پنجم",
      content:
        "فصل یک میکروتیک معمولاً به معرفی پایه‌ای این سیستم‌عامل و تجهیزات شبکه می‌پردازد. در این فصل، مفاهیم کلیدی مثل ساختار سیستم‌عامل، انواع روترها و سوئیچ‌ها، و نحوه تنظیمات ابتدایی برای ایجاد یک شبکه مؤثر بررسی می‌شود.",
      sections: [
        {
          title: "قوانین فایروال (Firewall Rules)	",
          pages: "273-286",
          difficulty: "مبتدی",
        },
        {
          title: "Firewall Modules",
          pages: "287-300",
          difficulty: "متوسط",
        },
        {
          title: "Chain",
          pages: "301-314",
          difficulty: "پیشرفته",
        },
        {
          title: "ایجاد Customized Chains	",
          pages: "315-328",
          difficulty: "پیشرفته",
        },
        {
          title: "Filter Action	",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Safe Mode",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "ویژگی‌های حالت Safe Mode",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "نحوه استفاده از Safe Mode در Terminal",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Mac server",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "مدیریت دسترسی از طریق MAC Address در RouterOS",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Connection Tracking",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "فعال‌سازی خودکار Connection Tracker",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Connection State",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "NAT",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "دلایل استفاده از NAT در IPv4",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "نحوه عملکرد NAT",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Type OF NAT",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "NAT Chain",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "NAT Action",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Simple Queue",
          pages: "329-342",
          difficulty: "متوسط",
        },
      ],
    },
    {
      title: " Simple Queue:فصل ششم",
      content:
        "فصل یک میکروتیک معمولاً به معرفی پایه‌ای این سیستم‌عامل و تجهیزات شبکه می‌پردازد. در این فصل، مفاهیم کلیدی مثل ساختار سیستم‌عامل، انواع روترها و سوئیچ‌ها، و نحوه تنظیمات ابتدایی برای ایجاد یک شبکه مؤثر بررسی می‌شود.",
      sections: [
        {
          title: "چرا مدیریت پهنای باند اهمیت دارد؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "شبکه و مدیریت پهنای باند",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Queue List",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "روش‌های تعریف Simple Queue",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "MIR (Maximum Information Rate)",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "CIR (Committed Information Rate)",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Bursting",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "روند محاسبه Bursting",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "چرا مدیریت پهنای باند اهمیت دارد؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "شبکه و مدیریت پهنای باند",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Queue List",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "روش‌های تعریف Simple Queue",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "MIR (Maximum Information Rate)",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "CIR (Committed Information Rate)",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Bursting",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "روند محاسبه Bursting",
          pages: "329-342",
          difficulty: "متوسط",
        },
      ],
    },
    {
      title: " Wireless:فصل هفتم",
      content:
        "فصل یک میکروتیک معمولاً به معرفی پایه‌ای این سیستم‌عامل و تجهیزات شبکه می‌پردازد. در این فصل، مفاهیم کلیدی مثل ساختار سیستم‌عامل، انواع روترها و سوئیچ‌ها، و نحوه تنظیمات ابتدایی برای ایجاد یک شبکه مؤثر بررسی می‌شود.",
      sections: [
        {
          title: "پروتکل‌های وایرلس",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Type Of Wireless Area Network",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "درک اصطلاحات اساسی در شبکه‌های وایرلس",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Config Wireless Interfaces",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "پارامترهای کانفیگ وایرلس",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "حالت‌های مختلف Mode",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Band چیست؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "چرا استانداردها مهم‌اند؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Channel Width (عرض کانال) چیست؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "اهمیت انتخاب صحیح Channel Width",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Frequency: تنظیم فرکانس کاری در وایرلس",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "فرکانس و کانال چیست؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "چرا انتخاب فرکانس مهم است؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "SSID: شناسنامه شبکه وایرلس شما",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Security Profile: راهنمای امنیت وایرلس",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "ایجاد یک پروفایل امنیتی جدید",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "کاربرد Security Profile",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "حالت‌های Frequency Mode",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Country: تنظیم کشور برای اعمال قوانین مخابراتی",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "چگونه Advanced Mode را فعال کنیم؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "DFS چیست؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "عوامل فعال‌سازی DFS",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "کاربردهای Radio Name",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Connect Station to AP",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "security profile",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Registration",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Access List",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "نحوه ایجاد قوانین (Rule)",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Connect List",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Default Properties",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "پروتکل‌های وایرلس",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Type Of Wireless Area Network",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "درک اصطلاحات اساسی در شبکه‌های وایرلس",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Config Wireless Interfaces",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "پارامترهای کانفیگ وایرلس",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "حالت‌های مختلف Mode",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Band چیست؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "چرا استانداردها مهم‌اند؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Channel Width (عرض کانال) چیست؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "اهمیت انتخاب صحیح Channel Width",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Frequency: تنظیم فرکانس کاری در وایرلس",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "فرکانس و کانال چیست؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "چرا انتخاب فرکانس مهم است؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "SSID: شناسنامه شبکه وایرلس شما",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Security Profile: راهنمای امنیت وایرلس",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "ایجاد یک پروفایل امنیتی جدید",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "کاربرد Security Profile",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "حالت‌های Frequency Mode",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Country: تنظیم کشور برای اعمال قوانین مخابراتی",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "چگونه Advanced Mode را فعال کنیم؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "DFS چیست؟",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "عوامل فعال‌سازی DFS",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "کاربردهای Radio Name",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Connect Station to AP",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "security profile",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Registration",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Access List",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "نحوه ایجاد قوانین (Rule)",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Connect List",
          pages: "329-342",
          difficulty: "متوسط",
        },
        {
          title: "Default Properties",
          pages: "329-342",
          difficulty: "متوسط",
        },
      ],
    },
  ];

  // Create motion components for table elements
  const MotionTable = motion.table;
  const MotionTr = motion.tr;

  return (
    <Accordion type="single" collapsible className="w-full" dir="rtl">
      {chapters.map((chapter, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="flex float-end justify-end">
            <div className="flex items-center">
              <span>{chapter.title}</span>
              <span className="bg-[#1B263B] text-white rounded-full w-8 h-8 flex items-center justify-center ml-3">
                {index + 1}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-right">
              <p className="text-muted-foreground">{chapter.content}</p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 overflow-hidden"
              >
                <div className="rounded-lg border border-white-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <MotionTable
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <thead>
                        <tr className="bg-[#0D1B2A] dark:bg-purple-900/20">
                          <th className="px-4 py-3 text-right text-sm font-medium text-white dark:text-purple-300">
                            درجه سختی
                          </th>
                          <th className="px-4 py-3 text-right text-sm font-medium  text-white dark:text-purple-300">
                            صفحات
                          </th>

                          <th className="px-4 py-3 text-right text-sm font-medium  text-white dark:text-purple-300">
                            عنوان
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {chapter.sections.map((section, sectionIndex) => (
                          <MotionTr
                            key={sectionIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.1 + sectionIndex * 0.1,
                            }}
                            className={`${
                              sectionIndex % 2 === 0
                                ? "bg-[#E0E1DD] dark:bg-gray-800"
                                : "bg-[#415A77]/40 dark:bg-gray-800/50"
                            } border-b border-purple-100 dark:border-purple-800/20 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-colors`}
                          >
                            <td className="px-4 py-3 text-sm text-right">
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                  section.difficulty === "مبتدی"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                                    : section.difficulty === "متوسط"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                                    : section.difficulty === "پیشرفته"
                                    ? "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300"
                                    : "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
                                }`}
                              >
                                {section.difficulty}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm  text-right">
                              {section.pages}
                            </td>

                            <td
                              className="px-4 py-3 text-sm text-right"
                              dir="auto"
                            >
                              {section.title}
                            </td>
                          </MotionTr>
                        ))}
                      </tbody>
                    </MotionTable>
                  </div>
                </div>
              </motion.div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
