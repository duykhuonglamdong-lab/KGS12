import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Lamp, Sofa, Lightbulb, Plug, Phone, Mail, MapPin, Star, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Thiết Bị Điện",
    desc: "Ổ cắm, công tắc, aptomat, thiết bị thông minh...",
    icon: Plug,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Đèn Chiếu Sáng",
    desc: "Đèn trần, downlight, led panel, đèn trang trí...",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Nội Thất Hiện Đại",
    desc: "Bàn ghế, sofa, kệ tủ, decor tối giản...",
    icon: Sofa,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
];

const featured = [
  {
    name: "Đèn thả Nordic Minimal",
    price: "1.290.000₫",
    tag: "Bán chạy",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Công tắc cảm ứng kính",
    price: "390.000₫",
    tag: "Smart Home",
    img: "https://images.unsplash.com/photo-1596445836561-cf2f9c2eb2aa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Sofa nỉ dáng L",
    price: "7.990.000₫",
    tag: "New",
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function KhongGianSangHome() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Topbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-neutral-900 text-white grid place-items-center shadow">
              <Lamp className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-none tracking-tight">Không Gian Sáng</h1>
              <p className="text-xs text-neutral-500 -mt-0.5">Thiết bị điện • Chiếu sáng • Nội thất hiện đại</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#san-pham" className="hover:text-neutral-600">Sản phẩm</a>
            <a href="#ve-chung-toi" className="hover:text-neutral-600">Về chúng tôi</a>
            <a href="#du-an" className="hover:text-neutral-600">Dự án</a>
            <a href="#lien-he" className="hover:text-neutral-600">Liên hệ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl">Nhận báo giá</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-neutral-50" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="rounded-full px-3 py-1">Showroom mới khai trương</Badge>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Không gian sống rực rỡ với <span className="text-neutral-600">ánh sáng thông minh</span>
            </h2>
            <p className="mt-4 text-neutral-600 max-w-prose">
              Chuyên cung cấp thiết bị điện, giải pháp chiếu sáng & nội thất hiện đại. Tối ưu thẩm mỹ – tiết kiệm năng lượng – lắp đặt nhanh chóng.
            </p>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl" asChild>
                <a href="#san-pham" className="flex items-center gap-1">Khám phá sản phẩm <ChevronRight className="h-4 w-4" /></a>
              </Button>
              <Button variant="outline" className="rounded-2xl" asChild>
                <a href="#lien-he">Tư vấn miễn phí</a>
              </Button>
            </div>
            <ul className="mt-6 grid grid-cols-3 gap-4 text-xs text-neutral-600">
              <li className="flex items-center gap-2"><Star className="h-4 w-4" /> Bảo hành chính hãng</li>
              <li className="flex items-center gap-2"><Star className="h-4 w-4" /> Giao nhanh trong ngày</li>
              <li className="flex items-center gap-2"><Star className="h-4 w-4" /> Thiết kế 1-1</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1920&auto=format&fit=crop"
                alt="Không Gian Sáng - Hero"
                className="aspect-video w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section id="san-pham" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Danh mục nổi bật</h3>
            <p className="text-neutral-600 text-sm">Sản phẩm tuyển chọn cho mọi không gian.</p>
          </div>
          <Button variant="outline" className="rounded-2xl">Xem tất cả</Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <Card key={i} className="rounded-3xl overflow-hidden border-neutral-200">
              <CardHeader className="p-0">
                <img src={c.image} alt={c.title} className="h-44 w-full object-cover" loading="lazy" />
              </CardHeader>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <c.icon className="h-5 w-5" />
                  <CardTitle className="text-lg">{c.title}</CardTitle>
                </div>
                <p className="text-sm text-neutral-600">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Sản phẩm đề xuất</h3>
              <p className="text-neutral-600 text-sm">Chất lượng – giá hợp lý – bảo hành rõ ràng.</p>
            </div>
            <Button variant="outline" className="rounded-2xl">Xem báo giá</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <Card key={i} className="rounded-3xl overflow-hidden border-neutral-200 hover:shadow-lg transition">
                <CardHeader className="p-0">
                  <img src={p.img} alt={p.name} className="h-48 w-full object-cover" loading="lazy" />
                </CardHeader>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{p.name}</CardTitle>
                    <Badge className="rounded-full">{p.tag}</Badge>
                  </div>
                  <p className="mt-2 font-semibold">{p.price}</p>
                  <Button className="mt-4 w-full rounded-2xl" variant="secondary">Thêm vào báo giá</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About / USP */}
      <section id="ve-chung-toi" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Vì sao chọn Không Gian Sáng?</h3>
            <ul className="mt-4 space-y-3 text-neutral-700">
              <li className="flex gap-3"><span className="font-semibold">Đồng bộ</span>: cung cấp trọn gói điện – ánh sáng – nội thất.</li>
              <li className="flex gap-3"><span className="font-semibold">Tiết kiệm</span>: tư vấn giải pháp tối ưu công suất & chi phí.</li>
              <li className="flex gap-3"><span className="font-semibold">Thẩm mỹ</span>: phong cách hiện đại, tối giản, bền xu hướng.</li>
              <li className="flex gap-3"><span className="font-semibold">Dịch vụ nhanh</span>: hỗ trợ 24/7, lắp đặt trong 48 giờ.</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl">Đặt lịch khảo sát</Button>
              <Button variant="outline" className="rounded-2xl">Tải hồ sơ năng lực</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop" alt="Showroom" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop" alt="Thi công" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden col-span-2">
              <img src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2cc1?q=80&w=1600&auto=format&fit=crop" alt="Nội thất" className="h-56 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects / Testimonials */}
      <section id="du-an" className="bg-neutral-100 border-y">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Khách hàng nói gì</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <Card key={i} className="rounded-3xl border-neutral-200">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 text-amber-500 mb-2">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="text-sm text-neutral-700">
                    “Lắp đặt nhanh, tư vấn tận tâm. Ánh sáng đẹp và tiết kiệm điện rõ rệt.”
                  </p>
                  <div className="mt-4 text-sm font-semibold">Anh Minh – Q.7</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="lien-he" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Liên hệ tư vấn & báo giá</h3>
            <p className="text-neutral-600 mt-2">Điền thông tin, đội ngũ Không Gian Sáng sẽ liên hệ trong 1 giờ làm việc.</p>
            <form className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Họ và tên" className="rounded-2xl" />
                <Input placeholder="Số điện thoại" className="rounded-2xl" />
              </div>
              <Input placeholder="Email (không bắt buộc)" className="rounded-2xl" />
              <Textarea placeholder="Nhu cầu của bạn (ví dụ: đèn cho phòng khách 20m², công tắc thông minh 2 chiều...)" className="rounded-2xl" rows={5} />
              <Button className="rounded-2xl">Gửi yêu cầu</Button>
            </form>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2"><Phone className="h-4 w-4 mt-1" /> 090x xxx xxx</div>
              <div className="flex items-start gap-2"><Mail className="h-4 w-4 mt-1" /> lienhe@kongsangsang.vn</div>
              <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1" /> 123 Đường Ánh Dương, TP.HCM</div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border bg-white">
            <iframe
              title="Bản đồ"
              className="w-full h-[360px]"
              src="https://www.google.com/maps?q=Ho%20Chi%20Minh%20City&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl bg-white text-neutral-900 grid place-items-center">
                <Lamp className="h-5 w-5" />
              </div>
              <div className="font-bold">Không Gian Sáng</div>
            </div>
            <p className="text-sm text-neutral-400 mt-3">Thiết bị điện, chiếu sáng & nội thất hiện đại – đồng bộ cho mọi không gian.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Danh mục</div>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Thiết bị điện</li>
              <li>Đèn chiếu sáng</li>
              <li>Nội thất</li>
              <li>Giải pháp smart home</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Hỗ trợ</div>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Chính sách bảo hành</li>
              <li>Giao hàng & lắp đặt</li>
              <li>Đổi trả</li>
              <li>Hướng dẫn sử dụng</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Kết nối</div>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Facebook</li>
              <li>Zalo OA</li>
              <li>TikTok</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-2">
            <div>© {new Date().getFullYear()} Không Gian Sáng. All rights reserved.</div>
            <div>Thiết kế bởi KGS Web Studio</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
