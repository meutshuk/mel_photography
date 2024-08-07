export function generateBreadcrumbs(pathname: string) {
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
        const url = '/' + segments.slice(0, index + 1).join('/');
        return { name: segment, url };
    });
}