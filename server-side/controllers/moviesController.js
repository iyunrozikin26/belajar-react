const { User, Movie, Genre, Cast, Order, sequelize } = require("../models");

class Controller {
    static async getAllMovies(req, res) {
        try {
            let option = {
                include: [
                    {
                        model: User,
                        attributes: ["firstName", "lastName", "role"],
                    },
                    {
                        model: Genre,
                        attributes: ["name"],
                    },
                    {
                        model: Cast,
                        attributes: ["name", "profilePict"],
                    },
                ],
                order: [["createdAt", "DESC"]],
            };

            const allMovies = await Movie.findAndCountAll(option);
            res.status(200).json(allMovies);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    static async createMovie(req, res) {
        const { title, slug, synopsis, trailerUrl, imgUrl, rating, price, GenreId } = req.body;
        try {
            const newMovie = {
                title,
                slug,
                synopsis,
                trailerUrl,
                imgUrl,
                rating,
                price,
                GenreId,
                AuthorId: req.user.id,
            };

            const createNewMovie = await Movie.create(newMovie);
            res.status(201).json(createNewMovie);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    static async readMovie(req, res) {
        const { movieId } = req.params;
        try {
            let option = {
                include: [
                    {
                        model: User,
                        attributes: ["firstName", "lastName", "role"],
                    },
                    {
                        model: Genre,
                        attributes: ["name"],
                    },
                    {
                        model: Cast,
                        attributes: ["name", "profilePict"],
                    },
                ],
            };
            const movie = await Movie.findByPk(movieId, option);
            if (!movie) throw { status: 404, message: "movie is Not Found" };
            res.status(200).json(movie);
        } catch (error) {
            console.log(error);
            res.status(error.status).json(error.message);
        }
    }

    static async updateMovie(req, res) {
        const { movieId } = req.params;
        const { title, slug, synopsis, trailerUrl, imgUrl, rating, price, GenreId } = req.body;

        try {
            const movieByPk = await Movie.findByPk(movieId);
            if (!movieByPk) throw { status: 404, message: "movie is Not Found" };

            const updateInput = {
                title,
                slug,
                synopsis,
                trailerUrl,
                imgUrl,
                rating,
                price,
                GenreId: +GenreId,
                AuthorId: req.user.id,
            };

            const updateMovie = await Movie.update(updateInput, {
                where: { id: movieId },
                returning: true,
            });
            res.status(201).json(updateMovie);
        } catch (error) {
            console.log(error);
            res.status(error.status).json(error.message);
        }
    }

    static async deleteMovie(req, res) {
        const { movieId } = req.params;
        try {
            const movieByPk = await Movie.findByPk(movieId);
            if (!movieByPk) throw { status: 404, message: "movie is Not Found" };

            const deleteMovie = await Movie.destroy({
                where: { id: movieId },
            });
            res.status(201).json(movieByPk);
        } catch (error) {
            console.log(error);
            res.status(error.status).json(error.message);
        }
    }

    static async getAllGenre(req, res) {
        try {
            const allGenre = await Genre.findAll();
            res.status(200).json(allGenre);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    static async postTransaction(req, res, next) {
        const t = await sequelize.transaction();

        const { movieId } = req.params;
        const AuthorId = req.user.id; // hardcore
        try {
            const user = await User.findByPk(AuthorId);
            const movie = await Movie.findByPk(movieId);
            const order = await Order.findOne({ where: { MovieId: movieId } });

            // console.log(+user.money);
            // console.log(+movie.price);

            if (!user) throw { status: 401, message: "you must to login first" };
            if (Number(user.money) < Number(movie.price)) throw { status: 402, message: "your money is not enough" };
            if (order) throw { status: 429, message: "you have ordered this movie" };

            const currentMoney = Number(user.money) - Number(movie.price);

            // TRANSACTION PROSES
            const createdOrder = await Order.create({ MovieId: movieId, AuthorId }, { transaction: t });
            const updatedUser = await User.update({ money: currentMoney }, { where: { id: AuthorId }, returning: true }, { transaction: t });

            await t.commit();
            res.status(201).json([updatedUser, order]);
        } catch (error) {
            console.log(error);
            await t.rollback();
            res.status(error.status).json(error.message);
        }
    }
}

module.exports = Controller;
