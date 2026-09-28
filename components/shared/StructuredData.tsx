export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthClub',
    name: 'DUKE FITNESS CLUB',
    description: 'Luxury fitness and lifestyle destination in Dhaka, Bangladesh. Gym, restaurant, swimming pool, and game zone under one roof.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House 1, Road 1, Gulshan 2',
      addressLocality: 'Dhaka',
      postalCode: '1212',
      addressCountry: 'BD',
    },
    telephone: '+8801700000000',
    openingHours: 'Mo-Su 06:00-23:00',
    priceRange: '৳৳',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
