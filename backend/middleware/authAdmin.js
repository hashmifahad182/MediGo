import jwt from "jsonwebtoken";

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {

        const { atoken } = req.headers;

        if (!atoken) {
            return res.json({
                success: false,
                message: "Not Authorized. Login Again."
            });
        }

        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

        const validAdmin =
            token_decode ===
            process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD;

        const validDemoAdmin =
            token_decode ===
            process.env.DEMO_ADMIN_EMAIL + process.env.DEMO_ADMIN_PASSWORD;

        

        if (!validAdmin && !validDemoAdmin) {
            return res.json({
                success: false,
                message: "Not Authorized. Login Again."
            });
        }

        req.isDemoAdmin = validDemoAdmin;

        next();

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};

export default authAdmin;