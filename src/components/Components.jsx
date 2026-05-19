import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";

export default function Components() {
    return (
        <div id="dashboard-container" className="p-6 font-poppins relative">
            <PageHeader title="Components Playground" breadcrumb="UI Library / Dashboard" />

            <div className="mt-8 space-y-8">
                
                {/* --- BASIC COMPONENTS --- */}
                <section>
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="w-2 h-6 bg-hijau rounded-full inline-block"></span> Basic Components
                    </h2>
                    
                    <Card>
                        <div className="space-y-6">
                            {/* Buttons */}
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-50 pb-2">Buttons</h3>
                                <div className="flex flex-wrap gap-3">
                                    <Button type="primary">Primary Edit</Button>
                                    <Button type="success">Success Save</Button>
                                    <Button type="danger">Danger Delete</Button>
                                    <Button type="warning">Warning Alert</Button>
                                    <Button type="secondary">Secondary Cancel</Button>
                                </div>
                            </div>

                            {/* Badges */}
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-50 pb-2">Badges</h3>
                                <div className="flex gap-3">
                                    <Badge type="primary">New Order</Badge>
                                    <Badge type="success">Completed</Badge>
                                    <Badge type="danger">Cancelled</Badge>
                                    <Badge type="warning">Pending</Badge>
                                    <Badge type="secondary">Draft</Badge>
                                </div>
                            </div>

                            {/* Avatars */}
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-50 pb-2">Avatars</h3>
                                <div className="flex gap-2">
                                    <Avatar name="Arini" />
                                    <Avatar name="Budi" />
                                    <Avatar name="Citra" imageUrl="https://avatar.iran.liara.run/public/12" />
                                    <Avatar name="Doni" imageUrl="https://avatar.iran.liara.run/public/44" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* --- DATA DISPLAY COMPONENTS --- */}
                <section>
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="w-2 h-6 bg-blue-500 rounded-full inline-block"></span> Data Display Components
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {/* Contoh 1 Card Biasa */}
                        <Card className="bg-gradient-to-br from-green-50 to-white">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white rounded-2xl shadow-sm"><span className="text-hijau text-xl font-black">📦</span></div>
                                <Badge type="success">Daily Stat</Badge>
                            </div>
                            <h3 className="text-3xl font-black text-gray-800 mb-1">357</h3>
                            <p className="text-sm font-bold text-gray-400">Total Delivered Orders</p>
                        </Card>

                        {/* Contoh 2 Product Card */}
                        <ProductCard 
                            image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop"
                            title="Burger Sedap Spesial"
                            category="Food"
                            price="Rp 45.000"
                            description="Burger daging sapi panggang asli dengan saus rahasia Sedap Kitchen yang lumer di mulut."
                        />

                        {/* Contoh 3 Product Card */}
                        <ProductCard 
                            image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop"
                            title="Salad Buah Segar"
                            category="Dessert"
                            price="Rp 25.000"
                            description="Potongan buah premium dengan baluran mayonaise sehat dan keju berlimpah."
                        />
                    </div>
                </section>

            </div>
        </div>
    );
}