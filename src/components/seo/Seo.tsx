interface Props {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	url?: string;
	type?: string;
	siteName?: string;
}

const SEO: React.FC<Props> = ({
	title = "RR",
	description = "Rent a Room!",
	keywords,
	image,
	url,
	type = "website",
	siteName = "Rent a Room!",
}) => {
	const fullTitle = title ? `${title} - ${siteName}` : siteName;
	const currentUrl =
		url || (typeof window !== "undefined" ? window.location.href : "");

	return (
		<>
			{/* Basic meta tags */}
			<title>{fullTitle}</title>
			{description && <meta content={description} name="description" />}
			{keywords && <meta content={keywords} name="keywords" />}

			{/* Open Graph */}
			<meta content={fullTitle} property="og:title" />
			{description && <meta content={description} property="og:description" />}
			<meta content={type} property="og:type" />
			{currentUrl && <meta content={currentUrl} property="og:url" />}
			{image && <meta content={image} property="og:image" />}
			<meta content={siteName} property="og:site_name" />

			{/* Twitter Card */}
			<meta
				content={image ? "summary_large_image" : "summary"}
				name="twitter:card"
			/>
			<meta content={fullTitle} name="twitter:title" />
			{description && <meta content={description} name="twitter:description" />}
			{image && <meta content={image} name="twitter:image" />}

			{/* Canonical URL */}
			{currentUrl && <link href={currentUrl} rel="canonical" />}
		</>
	);
};

export default SEO;
