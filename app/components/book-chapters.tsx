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
        "با ساختار سیستم عامل RouterOs،نحوه کار با Winbox ومفاهیم پایه ای شبکه در میکروتیک آشنا میشویم.",
      sections: [
        { title: "About MikroTik" },
        { title: "Training Programs" },
        { title: "What is RouterOS" },
        { title: "Accessing the Router" },
        { title: "WinBox" },
        { title: "راهنمای دانلود نرم‌افزار WinBox از سایت میکروتیک" },
        { title: "شرح گزینه‌های مختلف در نرم‌افزار WinBox" },
        { title: "Console" },
        { title: "مراحل اتصال از طریق کنسول سریال" },
        { title: "مراحل اتصال به RouterOS از طریق SSH" },
        { title: "مراحل اتصال به RouterOS از طریق Telnet" },
        { title: "WebFig" },
        { title: "مراحل اتصال به RouterOS از طریق HTTP یا HTTPS" },
        { title: "Command line" },
        { title: "استفاده از کلید TAB در Command Line میکروتیک" },
        { title: "استفاده از کلید F1 در Command Line" },
        { title: "استفاده از Double TAB در Command Line میکروتیک" },
        { title: "استفاده از کلیدهای جهت بالا و پایین (↑↓) در Command Line" },
        { title: "استفاده از کلیدهای ترکیبی CTRL + L در Command Line" },
        { title: "Type of Configuration" },
        { title: "Basic Configuration (تنظیمات اولیه)" },
        { title: "Blank Configuration (بدون تنظیمات)" },
        { title: "Custom Configuration (تنظیمات سفارشی)" },
        { title: "تغییرات در نسخه‌های جدید میکروتیک" },
        { title: "حذف تنظیمات اولیه" },
        { title: "گزینه‌های موجود در  Reset Configuration" },
        { title: "Identity" },
        { title: "نحوه تغییر نام روتر در میکروتیک" },
        { title: "Updating RouterOS" },
        { title: "روش Download File (دانلود و نصب دستی)" },
        { title: "بررسی تغییرات ورژن‌های RouterOS قبل از آپدیت" },
        { title: "Downgrade RouterOS" },
        { title: "Firmware" },
        { title: "مراحل آپدیت Firmware" },
        { title: "فعال کردن آپدیت خودکار Firmware" },
        { title: "Users" },
        { title: "چرا ایجاد کاربران جداگانه اهمیت دارد؟" },
        { title: "مراحل ایجاد و مدیریت کاربران در RouterOS" },
        { title: "ایجاد کاربر جدید" },
        { title: "Groups" },
        { title: "گروه‌های پیش‌فرض در RouterOS" },
        { title: "ایجاد گروه‌های جدید با دسترسی‌های سفارشی" },
        { title: "نحوه تغییر شماره پورت یا غیرفعال کردن سرویس‌ها" },
        { title: "آیا تغییر شماره پورت امنیت را افزایش می‌دهد؟" },
        { title: "تغییر شماره پورت چه زمانی کارایی دارد؟" },
        { title: "List" },
        { title: "ایجاد لیست جدید" },
        { title: "ترتیب عضویت اینترفیس‌ها در لیست" },
        { title: "NTP" },
        { title: "مشکل زمانی در روترهای میکروتیک" },
        { title: "پیکربندی NTP Client در RouterOS" },
        { title: "اتصال به سرور NTP اینترنتی" },
        { title: "تنظیم دستی تاریخ و زمان در RouterOS" },
        { title: "Backup" },
        { title: "بکاپ به روش Binary Backup" },
        { title: "مراحل تهیه Binary Backup" },
        { title: "بازگردانی فایل بکاپ در RouterOS" },
        { title: "Export Backup" },
        { title: "ویژگی‌های Export Backup" },
        { title: "نحوه تهیه بکاپ با روش Export" },
        { title: "بازگردانی تنظیمات از فایل Export" },
        { title: "Reset Password" },
        { title: "مراحل Reset Password به روش سخت‌افزاری" },
      ],
    },
    {
      title: "DHCP:فصل دوم",
      content:
        "یاد می‌گیریم چگونه به دستگاه‌ها در شبکه به‌صورت خودکار تنظیمات IP را اختصاص دهیم و مدیریت آدرس‌دهی را ساده و متمرکز کنیم.",
      sections: [
        { title: "هدف DHCP و اهمیت آن در شبکه" },
        { title: "اصطلاحات استاندارد در DHCP" },
        { title: "DHCP Message" },
        { title: "مراحل عملکرد DHCP و پیام‌های آن" },
        { title: "DHCP Client" },
        { title: "مراحل فعال‌سازی DHCP Client" },
        { title: "DHCP Server" },
        { title: "مراحل راه‌اندازی DHCP Server در RouterOS" },
        { title: "به چه صورت به اینترفیس آدرس IP اختصاص دهیم؟" },
        { title: "مدیریت کلاینت‌ها با استفاده از تب Leases" },
        { title: "عملکردهای مهم در تب Leases" },
        { title: "ARP" },
        { title: "نحوه عملکرد ARP" },
        { title: "ARP Table در RouterOS" },
        { title: "ARP Mode در RouterOS" },
      ],
    },
    {
      title: "Bridge:فصل سوم",
      content:
        "چگونه چند اینترفیس را در یک شبکه به صورت لایه ۲ با هم ترکیب کنیم تا مانند یک سوییچ عمل کرده و ترافیک بین آن‌ها را مدیریت کنیم.",
      sections: [
        { title: "Add Bridge" },
        { title: "اضافه کردن پورت‌ها به Bridge" },
        { title: "مدیریت Loopها در Bridge" },
      ],
    },
    {
      title: "Routing:فصل چهارم",
      content:
        "یاد می‌گیریم چگونه بین شبکه‌های مختلف ارتباط برقرار کنیم و مسیر مناسب برای ارسال پکت‌ها را با استفاده از مسیریابی ایستا (Static) تعیین کنیم.",
      sections: [
        { title: "روتینگ چیست؟" },
        { title: "Node" },
        { title: "روتینگ چطور کار می‌کند؟" },
        { title: "تعریف Gateway در شبکه" },
        { title: "اصول روتینگ در شبکه" },
        { title: "Routing Table" },
        { title: "Flagهای مرتبط با روت‌ها" },
        { title: "Add Route" },
        { title: "Route State" },
      ],
    },
    {
      title: "Firewall:فصل پنجم",
      content:
        "یاد می‌گیریم چگونه با استفاده از فایروال میکروتیک ترافیک ورودی و خروجی را کنترل، محدود و فیلتر کنیم تا امنیت شبکه را افزایش دهیم.",
      sections: [
        { title: "قوانین فایروال (Firewall Rules)" },
        { title: "Firewall Modules" },
        { title: "Chain" },
        { title: "ایجاد Customized Chains" },
        { title: "Filter Action" },
        { title: "Safe Mode" },
        { title: "ویژگی‌های حالت Safe Mode" },
        { title: "نحوه استفاده از Safe Mode در Terminal" },
        { title: "Mac server" },
        { title: "مدیریت دسترسی از طریق MAC Address در RouterOS" },
        { title: "Connection Tracking" },
        { title: "فعال‌سازی خودکار Connection Tracker" },
        { title: "Connection State" },
        { title: "NAT" },
        { title: "دلایل استفاده از NAT در IPv4" },
        { title: "نحوه عملکرد NAT" },
        { title: "Type OF NAT" },
        { title: "NAT Chain" },
        { title: "NAT Action" },
      ],
    },
    {
      title: "Simple Queue:فصل ششم",
      content:
        "یاد می‌گیریم چگونه پهنای باند کاربران و سرویس‌ها را مدیریت و محدود کنیم تا ترافیک شبکه به‌صورت منصفانه و بهینه توزیع شود.",
      sections: [
        { title: "چرا مدیریت پهنای باند اهمیت دارد؟" },
        { title: "شبکه و مدیریت پهنای باند" },
        { title: "Queue List" },
        { title: "روش‌های تعریف Simple Queue" },
        { title: "MIR (Maximum Information Rate)" },
        { title: "CIR (Committed Information Rate)" },
        { title: "Bursting" },
        { title: "روند محاسبه Bursting" },
        { title: "چرا مدیریت پهنای باند اهمیت دارد؟" },
        { title: "شبکه و مدیریت پهنای باند" },
        { title: "Queue List" },
        { title: "روش‌های تعریف Simple Queue" },
        { title: "MIR (Maximum Information Rate)" },
        { title: "CIR (Committed Information Rate)" },
        { title: "Bursting" },
        { title: "روند محاسبه Bursting" },
      ],
    },
    {
      title: "Wireless:فصل هفتم",
      content:
        "یاد می‌گیریم چگونه تنظیمات وایرلس را در میکروتیک انجام دهیم و لینک‌های وایرلس پایدار و امن بین دستگاه‌ها برقرار کنیم.",
      sections: [
        { title: "پروتکل‌های وایرلس" },
        { title: "Type Of Wireless Area Network" },
        { title: "درک اصطلاحات اساسی در شبکه‌های وایرلس" },
        { title: "Config Wireless Interfaces" },
        { title: "پارامترهای کانفیگ وایرلس" },
        { title: "حالت‌های مختلف Mode" },
        { title: "Band چیست؟" },
        { title: "چرا استانداردها مهم‌اند؟" },
        { title: "Channel Width (عرض کانال) چیست؟" },
        { title: "اهمیت انتخاب صحیح Channel Width" },
        { title: "Frequency: تنظیم فرکانس کاری در وایرلس" },
        { title: "فرکانس و کانال چیست؟" },
        { title: "چرا انتخاب فرکانس مهم است؟" },
        { title: "SSID: شناسنامه شبکه وایرلس شما" },
        { title: "Security Profile: راهنمای امنیت وایرلس" },
        { title: "ایجاد یک پروفایل امنیتی جدید" },
        { title: "کاربرد Security Profile" },
        { title: "حالت‌های Frequency Mode" },
        { title: "Country: تنظیم کشور برای اعمال قوانین مخابراتی" },
        { title: "چگونه Advanced Mode را فعال کنیم؟" },
        { title: "DFS چیست؟" },
        { title: "عوامل فعال‌سازی DFS" },
        { title: "کاربردهای Radio Name" },
        { title: "Connect Station to AP" },
        { title: "security profile" },
        { title: "Registration" },
        { title: "Access List" },
        { title: "نحوه ایجاد قوانین (Rule)" },
        { title: "Connect List" },
        { title: "Default Properties" },
      ],
    },
  ];

  // Create motion components for table elements
  const MotionTable = motion.table;
  const MotionTr = motion.tr;

  return (
    <Accordion type="single" collapsible className="w-full" dir="rtl">
      {chapters.map((chapter, index) => (
        <AccordionItem key={index} value={`item-${index}`} dir="auto">
          <AccordionTrigger className="flex float-end justify-end" dir="auto">
            <div className="flex items-center" dir="auto">
              <span className="text-center" dir="auto">
                {chapter.title}
              </span>
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
                          <th className="px-4 py-3 text-center text-sm font-medium  text-white dark:text-purple-300">
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
                            <td
                              className="px-4 py-3 text-sm text-center"
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
