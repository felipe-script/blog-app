import React from "react";

import imageArticle from "@/assets/article-img.jpg";
import { Button } from "@/components";
import * as S from "./styles";

const Home: React.FC = (): React.ReactElement => {
	return (
		<S.Container>
			<S.PrimarySection>
				<S.PrimaryArticle>
					<S.PrimaryArticleContent>
						<S.TitlePrimaryArticle>
							In Search of the Long Covid Cure
						</S.TitlePrimaryArticle>
						<S.DescriptionPrimary>
							Big company announcement or simple sub - header taking two or more
							lines.
						</S.DescriptionPrimary>
						<Button label="Read more" />
					</S.PrimaryArticleContent>
					<S.ImagePrimary src={imageArticle} />
				</S.PrimaryArticle>
			</S.PrimarySection>
			<S.SecondarySection>
				<S.CategoriesSection>
					<S.CategoriesText>Categories</S.CategoriesText>
					<S.CategoryButton>Marketing</S.CategoryButton>
					<S.CategoryButton>Design</S.CategoryButton>
					<S.CategoryButton>Engineering</S.CategoryButton>
				</S.CategoriesSection>
				<S.ArticlesSection>
					<S.Article>
						<S.ArticleImage src={imageArticle} />
						<S.ColumnArticle>
							<S.ArticleTitle>test title</S.ArticleTitle>
							<S.DescriptionArticle>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								quis risus ac mi pulvinar semper id viverra sem.
							</S.DescriptionArticle>
							<Button label="Read more" />
						</S.ColumnArticle>
					</S.Article>
				</S.ArticlesSection>
				<S.LoadMoreButton>Load more</S.LoadMoreButton>
			</S.SecondarySection>
			<S.Footer>
				<S.TextFooter>Copyright 2022. All Rights Reserved.</S.TextFooter>
			</S.Footer>
		</S.Container>
	);
};

export default Home;
