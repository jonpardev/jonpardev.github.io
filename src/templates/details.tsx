import React, { Fragment } from "react";
import { HeadProps, Link, PageProps } from "gatsby";
import { Project } from "../types/types"
import Layout from "../components/layout";
import Seo from "../components/seo";

type PageContextType = {
	node: Project;
}

const Details = ({ pageContext }: PageProps<object, PageContextType>) => {
	return(
		<Layout>
			<div key={pageContext.node.title} className="text-base font-light text-white leading-loose">
				<div className="mb-16">
					<h1 className="text-6xl xl:text-7xl">{pageContext.node.title}</h1>
					<h2 className="text-xl xl:text-2xl font-light text-neutral-600">{pageContext.node.subtitle}</h2>
				</div>
				<section className="mt-10">
					<h3 className="text-2xl xl:text-3xl mb-2">Skills</h3>
					<ul className="list-disc pl-[1em]">
					{pageContext.node.techArr?.map((stack, index) => (
						<li key={index}>
							<span className="text-neutral-500">{stack.title}: </span>
							{stack.skills.map((skill, index) => (
								<Fragment key={index}>
								<div className="inline-flex flex-row items-baseline fill-white">
									{skill.icon && (
										<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-[1em] mx-1 my-auto">
											<path d={skill.icon.svgPath} />
										</svg>
									)}
									{(skill.internalLink || skill.externalLink) ? (
										skill.internalLink ? (
											<Link
												to={skill.internalLink}
												className="no-underline"
											>{skill.title}</Link>
										) : (
											<a href={skill.externalLink}>{skill.title}</a>
										)
									) : (
										<span>{skill.title}</span>
									)}
								</div>
								{(index < stack.skills.length - 1) && ', '}
								</Fragment>
							))}
						</li>
					))}
					</ul>
				</section>
				<section className="mt-10">
					<h3 className="text-2xl xl:text-3xl mb-2">Description</h3>
					<ul className="list-disc pl-[1em]">
					{pageContext.node.descArr?.map((desc, index) => (
						<li key={index}>{desc}</li>
					))}
					</ul>
				</section>
				<section className="mt-10">
					<h3 className="text-2xl xl:text-3xl mb-2">Links</h3>
					<div className="flex flex-row gap-x-5">
						{pageContext.node.linksArr?.map((link, index) => (
							<a key={index} href={link.url} target="_blank"
								className="rounded-md px-5 font-black bg-white text-neutral-900 opacity-50 transition-opacity duration-300 hover:opacity-100 active:scale-105">
								{link.title}
							</a>
						))}
						</div>
				</section>
				{/* {pageContext.node.screenShotUrl && (
				<img src={new URL(`../../assets/images/${storedProject.screenShotUrl}`, import.meta.url).href}
						className="rounded-3xl my-10 w-1/2" />
				)} */}
			</div>
		</Layout>
	);
}

export const Head = ({ pageContext }: HeadProps<object, PageContextType>) => <Seo title={pageContext.node.title} />

export default Details;