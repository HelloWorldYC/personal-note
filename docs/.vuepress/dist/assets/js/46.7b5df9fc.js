(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{467:function(a,t,r){"use strict";r.r(t);var e=r(8),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"线程池有哪几种状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池有哪几种状态"}},[a._v("#")]),a._v(" 线程池有哪几种状态")]),a._v(" "),t("ul",[t("li",[a._v("Running")]),a._v(" "),t("li",[a._v("SHUTDOWN：不接受新的任务，但会继续执行队列中的任务")]),a._v(" "),t("li",[a._v("STOP：直接停掉所有任务")]),a._v(" "),t("li",[a._v("TIDYING：线程池在没有线程运行后进入该状态，并且会调用terminated()方法，该方法是空方法")]),a._v(" "),t("li",[a._v("Terminated：terminated()方法执行完后进入该状态")])]),a._v(" "),t("h3",{attrs:{id:"sychronized-和-reentrantlock-有哪些不同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sychronized-和-reentrantlock-有哪些不同点"}},[a._v("#")]),a._v(" Sychronized 和 ReentrantLock 有哪些不同点")]),a._v(" "),t("h3",{attrs:{id:"threadlocal有哪些应用场景-它底层是如何实现的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal有哪些应用场景-它底层是如何实现的"}},[a._v("#")]),a._v(" ThreadLocal有哪些应用场景？它底层是如何实现的？")]),a._v(" "),t("p",[a._v("经典的应用场景就是连接管理，因为ThreadLocal通过ThreadLocalMap可以保存数据，在同一个线程所处理的不同方法之间传递，key是ThreadLocal对象，value是数据。但是可能会造成内存泄漏问题，因为线程池中的线程不会被垃圾回收，就会导致使用完的数据仍占用内存空间，随着线程的任务不断进行，保存的数据越来越多，就会导致内存泄漏。解决方法是使用完数据手动清理remove().")]),a._v(" "),t("h3",{attrs:{id:"reentrantlock分为公平锁和非公平锁-那底层分别是如何实现的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reentrantlock分为公平锁和非公平锁-那底层分别是如何实现的"}},[a._v("#")]),a._v(" ReentrantLock分为公平锁和非公平锁，那底层分别是如何实现的？")]),a._v(" "),t("p",[a._v("ReetrantLock默认是非公平锁，如果要实现公平锁，传入参数是true；")]),a._v(" "),t("ul",[t("li",[a._v("公平锁：按照线程在队列中的排队顺序，先到者先拿到锁；")]),a._v(" "),t("li",[a._v("非公平锁：当线程要获取锁时（调用lock方法），先通过CAS操作去抢锁，如果没抢到，会和公平锁一样进入到tryAcquire方法，在tryAcquire方法中，如果发现锁这个时候被释放(state == 0)，非公平锁会直接CAS抢锁，但是公平锁会判断等待队列是否有线程处于等待状态，如果有则不去抢锁，乖乖排到队列后面。非公平锁会有更好的性能，因为它的吞吐量比较大，但是会让获取锁的时间变得更加不确定，可能会导致在阻塞队列中的线程长期处于饥饿状态。")])]),a._v(" "),t("h3",{attrs:{id:"sychronized的锁升级过程是怎样的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sychronized的锁升级过程是怎样的"}},[a._v("#")]),a._v(" Sychronized的锁升级过程是怎样的")]),a._v(" "),t("p",[a._v("偏向锁 -> 轻量级锁 -> 重量级锁"),t("br"),a._v("\n轻量级锁底层通过自旋实现，并不会阻塞线程。")]),a._v(" "),t("h3",{attrs:{id:"tomcat中为什么要使用自定义类加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tomcat中为什么要使用自定义类加载器"}},[a._v("#")]),a._v(" Tomcat中为什么要使用自定义类加载器")]),a._v(" "),t("p",[a._v("用于隔离不同应用之间的相同全类名的类（待详细）\n还可以利用自定义类加载器实现热加载功能")]),a._v(" "),t("h3",{attrs:{id:"jdk、jre、jvm之间的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk、jre、jvm之间的区别"}},[a._v("#")]),a._v(" JDK、JRE、JVM之间的区别")]),a._v(" "),t("h3",{attrs:{id:"hashcode-与equals-之间的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashcode-与equals-之间的关系"}},[a._v("#")]),a._v(" hashCode()与equals()之间的关系")]),a._v(" "),t("p",[a._v("在比较是否相同时，会先调用hashCode()方法得到哈希值，如果哈希值不同，就认为两个对象不相同，如果哈希值相同，再调用equals方法进行比较，如果这也相同，两个对象才相同。")]),a._v(" "),t("h3",{attrs:{id:"string、stringbuilder、stringbuffer的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string、stringbuilder、stringbuffer的区别"}},[a._v("#")]),a._v(" String、StringBuilder、StringBuffer的区别")]),a._v(" "),t("p",[a._v("String是常量，在字符串常量池中，StringBuilder和StringBuffer是可变的，但是StringBuffer是线程安全的，有很多方法都具备锁机制，而StringBuilder中方法是没有锁机制的，线程不一定安全。")]),a._v(" "),t("h3",{attrs:{id:"泛型中extends和super的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#泛型中extends和super的区别"}},[a._v("#")]),a._v(" 泛型中extends和super的区别")]),a._v(" "),t("p",[t("code",[a._v("<? extends T>")]),a._v(" 表示包括T在内的任何T的子类"),t("br"),a._v(" "),t("code",[a._v("<? super T>")]),a._v(" 表示包括T在内的任何T的父类")]),a._v(" "),t("h3",{attrs:{id:"重载和重写的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重载和重写的区别"}},[a._v("#")]),a._v(" 重载和重写的区别")]),a._v(" "),t("p",[a._v("重载：发生在同一个类中，方法名必须相同，参数类型不同、个数不同、或者顺序不同，方法返回值和访问修饰符可以不同，发生在编译时。（决定因素在参数）"),t("br"),a._v("\n重写：发生在父子类中，方法名、参数列表必须相同，返回值范围小于等于父类，抛出的异常范围小于等于父类，访问修饰符大于等于父类；如果父类方法访问修饰符为private则子类不能重写该方法。")]),a._v(" "),t("h3",{attrs:{id:"list和set的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list和set的区别"}},[a._v("#")]),a._v(" List和Set的区别")]),a._v(" "),t("ul",[t("li",[a._v("List:有序，按对象进入的顺序保存对象，可重复，允许多个Null元素对象，可以使用Iterator取出所有元素，再逐一遍历，也可以使用get(int index)获取指定下标的元素")]),a._v(" "),t("li",[a._v("Set：无序，不可重复，最多允许有一个Null元素对象，取元素时只能用Iterator接口取得所有元素，再逐一遍历各个元素")])]),a._v(" "),t("h3",{attrs:{id:"arraylist和linkedlist的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist和linkedlist的区别"}},[a._v("#")]),a._v(" ArrayList和LinkedList的区别")]),a._v(" "),t("p",[a._v("ArrayList底层实现是数组，LinkedList底层实现是链表")]),a._v(" "),t("h3",{attrs:{id:"谈谈concurrenthashmap的扩容机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谈谈concurrenthashmap的扩容机制"}},[a._v("#")]),a._v(" 谈谈ConcurrentHashMap的扩容机制")]),a._v(" "),t("ul",[t("li",[a._v("jdk1.7时扩容是对每个segment里面的HashMap去扩容（有一个segment数组，数组每个元素是一个segment，保存着一个HashMap，里面的元素还可能挂载着链表），扩容的逻辑和HashMap的扩容逻辑类似，扩容的判断也是每个segment内部单独判断的，判断是否有超过阈值")]),a._v(" "),t("li",[a._v("jdk1.8时concurrentHashMap只有一个Segment数组，所以扩容时扩的是segment数组（扩容时是多线程转移）\n"),t("ul",[t("li",[a._v("当某个线程进行put时，如果发现有ConcurrentHashMap正在进行扩容，那么该线程一起进行扩容")]),a._v(" "),t("li",[a._v("如果某个线程put时，发现没有正在扩容，则将key-value添加到ConcurrentHashMap中，然后判断是否超过阈值，超过了则进行扩容")]),a._v(" "),t("li",[a._v("concurrentHashMap是支持多个线程同时进行扩容的")]),a._v(" "),t("li",[a._v("扩容之前先生成一个新的数组")]),a._v(" "),t("li",[a._v("在转移元素时，先将原数组分组，将每组分给不同的线程来进行元素的转移，每个线程负责一组或多组的元素转移工作")])])])]),a._v(" "),t("h3",{attrs:{id:"jdk1-7到jdk1-8-hashmap发生了什么变化-底层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-7到jdk1-8-hashmap发生了什么变化-底层"}},[a._v("#")]),a._v(" jdk1.7到jdk1.8 HashMap发生了什么变化（底层）")]),a._v(" "),t("ul",[t("li",[a._v("1.7底层是数组+链表，1.8底层是数组+链表+红黑树，加红黑树的目的是提高HashMap插入和查询整体效率")]),a._v(" "),t("li",[a._v("1.7中链表插入使用的是头插法，1.8中链表插入使用的是尾插法，因为1.8中插入key和value时需要判断链表元素个数，所以需要遍历链表统计链表元素个数，所以正好直接就使用了尾插法")]),a._v(" "),t("li",[a._v("1.7中哈希算法比较复杂，存在各种右移与异或运算，1.8中进行了简化，因为复杂的哈希算法的目的就是为了提高散列性，来提供HashMap的整体效率，而1.8中新增了红黑树，所以可以适当的简化哈希算法，节省CPU资源")])]),a._v(" "),t("h3",{attrs:{id:"hashmap的put方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap的put方法"}},[a._v("#")]),a._v(" HashMap的Put方法")]),a._v(" "),t("h3",{attrs:{id:"深拷贝和浅拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝和浅拷贝"}},[a._v("#")]),a._v(" 深拷贝和浅拷贝")]),a._v(" "),t("h3",{attrs:{id:"hashmap的扩容机制原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap的扩容机制原理"}},[a._v("#")]),a._v(" HashMap的扩容机制原理")]),a._v(" "),t("h3",{attrs:{id:"copyonwritearraylist的底层原理是怎样的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist的底层原理是怎样的"}},[a._v("#")]),a._v(" CopyOnWriteArrayList的底层原理是怎样的")]),a._v(" "),t("p",[a._v("（ArrayList是线程不安全的，所以需要一个线程安全的，所以诞生了CopyOnWriteArrayList）")]),a._v(" "),t("ul",[t("li",[a._v("首先CopyOnWriteArrayList内部也是用数组来实现的，在向CopyOnWriteArrayList添加元素时，会复制一个新的数组，写操作在新数组上进行，读操作在原数组上进行")]),a._v(" "),t("li",[a._v("并且，写操作会加锁，防止出现并发写入丢失数据")]),a._v(" "),t("li",[a._v("写操作结束后会把原数组指向新数组")]),a._v(" "),t("li",[a._v("CopyOnWriteArrayList 允许在写操作时来读取数据，大大提高了读的性能，因此适合读多写少的应用场景，但会比较占内存，同时读到的数据不是实时最新的数据，所以不太适合实时性要求很高的场景")])]),a._v(" "),t("h3",{attrs:{id:"什么是字节码-采用字节码的好处是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是字节码-采用字节码的好处是什么"}},[a._v("#")]),a._v(" 什么是字节码？采用字节码的好处是什么？")]),a._v(" "),t("h3",{attrs:{id:"java中的异常体系是怎样的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java中的异常体系是怎样的"}},[a._v("#")]),a._v(" Java中的异常体系是怎样的？")]),a._v(" "),t("h3",{attrs:{id:"factorybean-和-beanfactory-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#factorybean-和-beanfactory-的区别"}},[a._v("#")]),a._v(" FactoryBean 和 BeanFactory 的区别？")]),a._v(" "),t("ul",[t("li",[a._v("FactoryBean可简化Bean的实例化过程：\n"),t("ul",[t("li",[a._v("1.通过 FactoryBean 封装 Bean 的实例化过程")]),a._v(" "),t("li",[a._v("2.将 FactoryBean 装配到 Spring 容器里")]),a._v(" "),t("li",[a._v("3.将 FactoryBean 注入给其他的 Bean")]),a._v(" "),t("li",[a._v("4.该 Bean 得到的是 FactoryBean 所管理的对象实例")])])])]),a._v(" "),t("h3",{attrs:{id:"java-为什么只有值传递"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-为什么只有值传递"}},[a._v("#")]),a._v(" Java 为什么只有值传递？")]),a._v(" "),t("p",[a._v("值传递：方法接收的是实参值的拷贝，会创建副本。"),t("br"),a._v("\n引用传递：方法接收的直接是实参所引用的对象在堆中的地址，不会创建副本，对形参的修改将影响到实参。"),t("br"),a._v("\nJava 对引用类型参数"),t("strong",[a._v("不是采用引用传递")]),a._v("，而是值传递，只是传入的是实参的地址，因此造成了方法内部对形参的修改会影响到实参。")])])}),[],!1,null,null,null);t.default=s.exports}}]);