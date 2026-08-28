import type { Dictionary } from './types'

const th = {
  meta: {
    title: 'TIC | Tera International Commercial Co., Ltd. — เพื่อนคู่คิดด้านการเดินทางที่คุณวางใจ',
    description:
      'Tera International Commercial Co., Ltd. (TIC) บริษัทตัวแทนท่องเที่ยวและบริการเดินทางครบวงจร ตั๋วเครื่องบิน วีซ่า รถเช่า โรงแรม ประสบการณ์กว่า 30 ปี ได้รับการรับรอง IATA, BSP',
  },
  header: {
    phoneLabel: '02-433-0191',
    hours: 'ติดต่อได้ 09.00 - 17.00 น.',
  },
  hero: {
    eyebrow: 'ทุกการเดินทาง เราดูแลให้เป็นเรื่องง่าย',
    headlineLine1: 'YOUR TRUSTED',
    headlineLine2: 'TRAVEL PARTNER',
    subtitle: 'Tera International Commercial Co., Ltd.',
    bullets: [
      'ผู้เชี่ยวชาญด้านการเดินทาง ครบวงจร',
      'บริการมืออาชีพ รวดเร็ว เชื่อถือได้',
      'ดูแลทั้งลูกค้าบุคคลและองค์กร',
    ],
    ctaPrimary: 'ติดต่อเรา',
    ctaSecondary: 'ดูบริการของเรา',
  },
  trustBar: {
    trusted: { label: 'Trusted', sub: 'เชื่อถือได้' },
    professional: { label: 'Professional', sub: 'บริการมืออาชีพ' },
    fast: { label: 'Fast & Efficient', sub: 'รวดเร็ว' },
    value: { label: 'Best Value', sub: 'คุ้มค่า คุ้มราคา' },
  },
  services: {
    eyebrow: 'บริการของเรา',
    heading: 'บริการของเรา',
    subheading: 'ครบจบทุกความต้องการด้านการเดินทาง',
    items: [
      {
        title: 'ตั๋วเครื่องบิน',
        subtitle: 'Air Ticket',
        description: 'จองตั๋วเครื่องบินทั่วโลกและต่างประเทศ ทุกสายการบิน ราคาพิเศษ ออกตั๋วรวดเร็ว',
      },
      {
        title: 'บริการวีซ่า',
        subtitle: 'Visa Service',
        description: 'บริการยื่นวีซ่าทุกประเทศ โดยทีมงานมืออาชีพ ให้คำปรึกษาฟรี',
      },
      {
        title: 'รถเช่า / รถพร้อมคนขับ',
        subtitle: 'Car Rental & Transfer',
        description: 'รถเช่าคุณภาพดี พร้อมคนขับมืออาชีพ บริการรับ-ส่งสนามบิน ทั่วไทย',
      },
      {
        title: 'จองโรงแรม',
        subtitle: 'Hotel Booking',
        description: 'จองโรงแรมทั่วโลก ราคาพิเศษ สำหรับลูกค้าทุกท่าน ทั้งรายบุคคลและองค์กร',
      },
    ],
  },
  whyChooseUs: {
    heading: 'ทำไมต้องเลือกเรา',
    items: [
      { title: 'ประสบการณ์ยาวนาน', description: 'มากกว่า 30 ปี ในอุตสาหกรรมท่องเที่ยว' },
      { title: 'ได้รับการรับรอง', description: 'IATA, BSP มาตรฐานระดับสากล' },
      { title: 'ทีมงานมืออาชีพ', description: 'ให้คำปรึกษาด้วยความเชี่ยวชาญ' },
      { title: 'ดูแลครบทุกขั้นตอน', description: 'ตั้งแต่ต้นจนถึงการเดินทางกลับ' },
    ],
  },
  airlines: {
    heading: 'สายการบินพันธมิตร',
    subheading: 'ครอบคลุมทุกสายการบิน ทั้งฟูลเซอร์วิสและโลว์คอสต์',
    fullService: 'Full-Service Airlines',
    lowCost: 'Low-Cost Carriers',
  },
  contact: {
    eyebrow: 'ติดต่อเรา',
    heading: 'ติดต่อเรา',
    subheading: 'พร้อมดูแลทุกการเดินทางของคุณ',
    phone: { label: 'Phone', value: '02-433-0191', sub: 'ติดต่อได้ 09.00 - 17.00 น.' },
    email: { label: 'Email', value: 'info@ticpumra.com', sub: 'ตอบกลับรวดเร็วภายใน 24 ชั่วโมง' },
    address: {
      label: 'Address',
      value: '123 ซอย สิรินธร 7 ถนน จรัญสนิทวงศ์',
      sub: 'แขวงบางบำหรุ เขตบางพลัด กรุงเทพ 10700',
    },
  },
  clients: {
    heading: 'ลูกค้าของเรา',
  },
  footer: {
    tagline: 'ผู้ให้บริการด้านการเดินทางแบบครบวงจร ด้วยประสบการณ์ยาวนานกว่า 30 ปี มุ่งมั่นให้บริการด้วยความซื่อสัตย์และมาตรฐานระดับสากล',
    servicesTitle: 'Our services',
    servicesList: ['ตั๋วเครื่องบิน', 'บริการวีซ่า', 'รถเช่า / รถพร้อมคนขับ', 'จองโรงแรม'],
    contactTitle: 'Contact us',
    copyright: '© 2024 Tera International Commercial Co., Ltd. สงวนลิขสิทธิ์',
  },
  common: {
    langToggleTh: 'ไทย',
    langToggleEn: 'EN',
    skipToContent: 'ข้ามไปยังเนื้อหาหลัก',
  },
} satisfies Dictionary

export default th
