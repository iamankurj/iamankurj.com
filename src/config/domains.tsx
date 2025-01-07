// Define valid subdomains
export const subdomains = ['tech', 'singing', 'finance', 'fitness'] as const;
export type Subdomain = typeof subdomains[number];

export const domains = {
  base: process.env.NODE_ENV === 'development' ? 'localhost' : 'iamankurj.com',

  // Create a method to get subdomain URL
  getSubdomain(subdomain: Subdomain) {
    if (process.env.NODE_ENV === 'development') {
      const port = typeof window !== 'undefined' ? window.location.port : '3000';
      return `${subdomain}.${this.base}${port ? `:${port}` : ''}`;
    }
    return `${subdomain}.${this.base}`;
  },

  // Create getters for each subdomain
  ...Object.fromEntries(
    subdomains.map(subdomain => [
      subdomain,
      {
        get: function(this: typeof domains) {
          return this.getSubdomain(subdomain);
        }
      }
    ])
  ),

  getFullUrl(subdomain: Subdomain) {
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    return `${protocol}://${this.getSubdomain(subdomain)}`;
  }
};

// Type safety for accessing subdomains
export type Domains = typeof domains;
