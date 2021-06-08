/**
 * @swagger
 * components:
 *   schemas:
 *     NewsSchema:
 *       type: object
 *       required:
 *         - title
 *         - about
 *         - photo
 *       properties:
 *         id:
 *           type: string
 *           description: Objected-id
 *         title:
 *           type: string
 *           description: The News title
 *         about:
 *           type: string
 *           description: The News about
 *         photo:
 *           type: string
 *           description: The News photo
 *       example:
 *         id: dfgd98ye89tyerty34895
 *         title: Ferrari fgdfgdfhth
 *         about: 50000 heh hjftgj  fgej je3yj eyj
 *         photo: 2020wreg45wrgg
 */

/**
 * @swagger
 * tags:
 *   name: News
 *   description: The News managing API
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The Newss managing API
 */

/**
 * @swagger
 * /admin/news:
 *   get:
 *     summary: Returns the list of all the News
 *     tags: [News]
 *     parameters:
 *       - in: header
 *         name: x-auth-token
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The list of the News
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NewsSchema'
 */

/**
 * @swagger
 * /admin/news/{id}:
 *   get:
 *     summary: Get the news by id
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The News id
 *     responses:
 *       200:
 *         description: The News description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewsSchema'
 *       404:
 *         description: The News was not found
 */

/**
 * @swagger
 * /admin/news:
 *   post:
 *     summary: Create a new News
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewsSchema'
 *     responses:
 *       200:
 *         description: The News was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewsSchema'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /admin/news/{id}:
 *  put:
 *    summary: Update the News by the id
 *    tags: [News]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The News id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewsSchema'
 *    responses:
 *      200:
 *        description: The News was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/NewsSchema'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * /admin/news/{id}:
 *   delete:
 *     summary: Remove the News by id
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The News id
 *
 *     responses:
 *       200:
 *         description: The News was deleted
 *       404:
 *         description: The News was not found
 */
