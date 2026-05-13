export function ContactMap() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[#E5E9F2] lg:h-[280px]">
      <iframe
        src="https://maps.google.com/maps?q=Sos+Constantei+nr+19+Mangalia+Constanta+Romania&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Locație DANI — Șos. Constanței nr. 19, Mangalia"
      />
    </div>
  );
}
